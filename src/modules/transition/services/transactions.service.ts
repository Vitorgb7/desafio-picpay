import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { TransactionRepository } from '../repositories/transactions.repository';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';
import { UserRepository } from '../../users/repositories/user.repository';
import axios from 'axios';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepository: TransactionRepository,
    private readonly usersRepository: UserRepository,
  ) {}

  async createTransaction(data: CreateTransactionDto) {
    const { payerId, payeeId, value } = data;

    const payer = await this.usersRepository.findById(payerId);
    const payee = await this.usersRepository.findById(payeeId);

    if (!payer || !payee) {
      throw new NotFoundException('Usuário pagador ou recebedor não encontrado.');
    }

    if (payer.type === 'SHOPKEEPER') {
      throw new BadRequestException('Lojistas não podem enviar dinheiro.');
    }

    if (payer.balance < value) {
      throw new BadRequestException('Saldo insuficiente.');
    }

    const response = await axios.get('https://util.devi.tools/api/v2/authorize');
    if (response.data.status !== 'authorized') {
      throw new BadRequestException('Transferência não autorizada.');
    }

    const transaction = await this.transactionsRepository.create({
      payerId,
      payeeId,
      value,
    });

    await this.usersRepository.update(payerId, { balance: payer.balance - value });
    await this.usersRepository.update(payeeId, { balance: payee.balance + value });

    await axios.post('https://util.devi.tools/api/v1/notify', {
      transactionId: transaction.id,
      message: 'Transferência realizada com sucesso!',
    });

    return transaction;
  }
}
