import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { UserType } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @Length(11, 14) 
  @IsNotEmpty()
  cpfCnpj: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  balance: number;

  @IsEnum(UserType)
  @IsNotEmpty()
  type: UserType;
}
