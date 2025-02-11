export class Transaction {
    id: number;
    payerId: number;
    payeeId: number;
    value: number;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    createdAt: Date;
  }
  