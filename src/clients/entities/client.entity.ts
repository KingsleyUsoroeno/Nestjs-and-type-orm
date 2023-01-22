import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany } from 'typeorm';
import { TransactionEntity } from '../../transactions/entities/transaction.entity';
import { BankerEntity } from '../../banker/entities/banker.entity';

@Entity('clients')
export class ClientEntity {

    @PrimaryGeneratedColumn()
    clientId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true, length: 10 })
    cardNumber: string;

    @Column({ type: 'numeric' })
    balance: number;

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => TransactionEntity, (transactionEntity) => transactionEntity.client)
    transactions: TransactionEntity[];
}

