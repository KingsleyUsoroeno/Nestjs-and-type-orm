import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity({ name: 'user_profile' })
export default class ProfileEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column()
    age: number;

    @Column({ nullable: true })
    dob: Date
}