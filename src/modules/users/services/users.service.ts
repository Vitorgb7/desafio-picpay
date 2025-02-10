import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersRepository } from '../repositories/users.repository';
import { CreateUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(data: CreateUserDto) {
    const userExists = await this.usersRepository.findByEmail(data.email);
    if (userExists) {
      throw new BadRequestException('Email já cadastrado.');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    return this.usersRepository.create({ ...data, password: hashedPassword });
  }

  async getUserById(id: number) {
    return this.usersRepository.findById(id);
  }
}
