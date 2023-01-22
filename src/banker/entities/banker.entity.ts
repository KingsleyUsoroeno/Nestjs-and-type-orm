import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from 'typeorm';
import { ClientEntity } from '../../clients/entities/client.entity';

@Entity("bankers")
export class BankerEntity {
    @PrimaryGeneratedColumn()
    bankerId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    employeeNumber: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


    @ManyToMany(() => ClientEntity)
    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: "bankerId",
            referencedColumnName: "bankerId"
        },
        inverseJoinColumn: {
            name: "clientId",
            referencedColumnName: "clientId"
        }
    })
    clients: ClientEntity[]
}