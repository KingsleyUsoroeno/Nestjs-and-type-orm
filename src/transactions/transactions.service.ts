import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './repository/transaction.repository';
import { TransactionEntity } from './entities/transaction.entity';

@Injectable()
export class TransactionsService {

  constructor(private readonly transactionRepository: TransactionRepository) { }

  public createTransaction(clientId: number, createTransactionDto: CreateTransactionDto): Promise<TransactionEntity> {
    return this.transactionRepository.createTransaction(clientId, createTransactionDto);
  }

  findAll() {
    return `This action returns all transactions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transaction`;
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
