import { Controller, Post, Body } from '@nestjs/common';
import { TransactionsService } from '../services/transactions.service';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() data: CreateTransactionDto) {
    return this.transactionsService.createTransaction(data);
  }
}
