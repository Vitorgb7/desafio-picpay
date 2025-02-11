import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/user.module';
// import { WalletModule } from './modules/wallet/wallet.module';
import { TransactionsModule } from './modules/transition/transactions.module';
import { PrismaService } from './shared/prisma.service';

@Module({
  imports: [UsersModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
