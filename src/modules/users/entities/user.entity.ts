import { UserType } from '@prisma/client';

export class User {
    id: number;
    fullName: string;
    cpfCnpj: string;
    email: string;
    password: string;
    balance: number;
    type: UserType;
    createdAt: Date;
    updatedAt: Date;
  }