import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepository, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
