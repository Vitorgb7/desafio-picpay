import { IsNumber, IsPositive } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  payerId: number;

  @IsNumber()
  payeeId: number;

  @IsPositive()
  value: number;
}
