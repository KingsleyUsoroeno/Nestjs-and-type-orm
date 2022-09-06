import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import UserEntity from "./user.entity";

@Entity({ name: 'user_posts' })
export default class PostEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @OneToMany(() => UserEntity, (user) => user.posts)
    user: UserEntity;

    @Column({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    createdAt: Date;
}