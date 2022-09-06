import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinTable } from 'typeorm';
import { ClientEntity } from '../../clients/entities/client.entity';


@Entity("bankers")
export class BankerEntity {
    @PrimaryGeneratedColumn()
    id: number;

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

    @JoinTable({
        name: "bankers_clients",
        joinColumn: {
            name: "bankerId",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "clientId",
            referencedColumnName: "id"
        }
    })
    client: ClientEntity[]
}