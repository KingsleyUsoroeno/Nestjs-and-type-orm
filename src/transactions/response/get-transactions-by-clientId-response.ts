import { Expose, Type } from '@nestjs/class-transformer';
import { ClientEntity } from '../../clients/entities/client.entity';

export class GetTransactionByClientIdResponse {


    @Expose()
    client: Clients

    @Expose()
    transactions: Transactions[]

}

export class Transactions {
    @Expose()
    transactionId: number;

    @Expose()
    transactionType: string;

    @Expose()
    amount: number;

    // //@Expose()
    // client: Clients;
}

export class Clients {

    @Expose()
    clientId: number;

    @Expose()
    firstName: string;

    @Expose()
    lastName: string;

    @Expose()
    email: string;

    @Expose()
    cardNumber: string;
}