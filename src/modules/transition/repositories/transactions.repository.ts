import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
import { Transaction, Prisma } from '@prisma/client';

@Injectable()
export class TransactionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTransaction(data: Prisma.TransactionCreateInput): Promise<Transaction> {
    return this.prisma.transaction.create({ data });
  }

  async findTransactionById(id: string): Promise<Transaction | null> {
    return this.prisma.transaction.findUnique({ where: { id } });
  }

  async updateTransactionStatus(id: string, status: string): Promise<Transaction> {
    return this.prisma.transaction.update({
      where: { id },
      data: { status },
    });
  }
}
