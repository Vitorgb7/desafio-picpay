import { Module } from '@nestjs/common';
import { TransactionsController } from './controllers/transactions.controller';
import { TransactionsService } from './services/transactions.service';
import { TransactionRepository } from './repositories/transactions.repository';
import { PrismaService } from 'src/shared/prisma.service';
import { UserRepository } from '../users/repositories/user.repository';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionRepository, UserRepository, PrismaService],
})
export class TransactionsModule {}
