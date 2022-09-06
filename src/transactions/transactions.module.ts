import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionRepository } from './repository/transaction.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionEntity } from './entities/transaction.entity';
import { ClientsModule } from '../clients/clients.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService, TransactionRepository],
  imports: [
    TypeOrmModule.forFeature([TransactionEntity]),
    ClientsModule,
  ],
})
export class TransactionsModule { }
