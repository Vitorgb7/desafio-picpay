import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }
}
