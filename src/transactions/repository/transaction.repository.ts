import { Injectable, BadRequestException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionEntity, TransactionType } from "../entities/transaction.entity";
import { Repository } from 'typeorm';
import { CreateTransactionDto } from "../dto/create-transaction.dto";
import { ClientRepository } from "../../clients/repository/client.repository";

@Injectable()
export class TransactionRepository {
    constructor(
        @InjectRepository(TransactionEntity) private transactionRepository: Repository<TransactionEntity>,
        private readonly clientRepository: ClientRepository
    ) { }

    public async createTransaction(clientId: number, transactionDto: CreateTransactionDto): Promise<TransactionEntity> {
        const client = await this.clientRepository.findClientById(clientId);

        const { transactionType, amount } = transactionDto;

        if (transactionType === TransactionType.DEPOSIT) {
            client.balance += amount;
        } else if (transactionType === TransactionType.WITHDRAWAL) {
            if (amount > client.balance) {
                throw new BadRequestException('insufficient funds for the amount to redraw');
            }
            client.balance -= amount;
        }

        const newClient = await this.clientRepository.saveClient(client); // will update this particular client entity in the db

        const transaction = await this.transactionRepository.create({ ...transactionDto });
        transaction.client = newClient;

        console.log("created transaction is ", JSON.stringify(transaction));

        await this.transactionRepository.save(transaction);
        return transaction;
    }

    public async getAllTransactionsByClientId(clientId: number): Promise<TransactionEntity[]> {
        return this.transactionRepository.createQueryBuilder('transactions')
            .leftJoinAndSelect("transactions.client", "clientEntity")
            .select(['transactions.transactionId, transactions.transactionType, transactions.amount'])
            .where("transactions.clientId = :clientId", { clientId: clientId })
            .getRawMany();

        // return this.transactionRepository.query(`
        //     SELECT * from clients
        //     RIGHT outer JOIN transactions
        //     ON clients.clientId = transactions.clientId;
        //     `);
    }

    public async findAll(): Promise<TransactionEntity[]> {
        return this.transactionRepository.createQueryBuilder('transactions')
            .getMany();
    }
}