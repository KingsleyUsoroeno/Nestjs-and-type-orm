import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ClientEntity } from '../../clients/entities/client.entity';

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAWAL = 'withdrawal'
}

@Entity('transactions')
export class TransactionEntity {

    @PrimaryGeneratedColumn()
    transactionId: number;

    @Column({ type: 'enum', enum: TransactionType })
    transactionType: string;

    @Column({ type: 'numeric' })
    amount: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // CASCADE will delete this transaction when the client is also deleted
    @ManyToOne(() => ClientEntity, (clientEntity) => clientEntity.transactions, { onDelete: "CASCADE" })
    // clientId is a created column that holds the reference to the client that has this transaction
    @JoinColumn({ name: "clientId" })
    client: ClientEntity;

}
