import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionRepository } from './repository/transaction.repository';
import { TransactionEntity } from './entities/transaction.entity';
import { GetTransactionByClientIdResponse, Clients, Transactions } from './response/get-transactions-by-clientId-response';
import { plainToClass } from '@nestjs/class-transformer';


@Injectable()
export class TransactionsService {

  constructor(private readonly transactionRepository: TransactionRepository) { }

  public createTransaction(clientId: number, createTransactionDto: CreateTransactionDto): Promise<TransactionEntity> {
    return this.transactionRepository.createTransaction(clientId, createTransactionDto);
  }

  public async findAll(): Promise<TransactionEntity[]> {
    return this.transactionRepository.findAll();
  }

  // private mapTransactions({ client, ...rest }: TransactionEntity): GetTransactionByClientIdResponse {
  //   let transactions: Transactions[] = [];
  //   let transaction = plainToClass(Transactions, rest);
  //   transactions.push(transaction);

  //   return {
  //     transactions,
  //     //client: plainToClass(Clients, client, { excludeExtraneousValues: true })
  //   };
  // }

  public async findTransactionsByClientId(clientId: number): Promise<TransactionEntity[]> {
    const transactions = await this.transactionRepository.getAllTransactionsByClientId(clientId);
    return transactions;
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
