import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import ProfileEntity from "./profile.entity";
import PostEntity from "./post.entity";

@Entity({ name: 'users' })
export default class UserEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column()
    password: string;

    @Column({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
    createdAt: Date;

    @OneToOne(() => ProfileEntity)
    @JoinColumn()
    profile: ProfileEntity;

    @ManyToOne(() => PostEntity, (posts) => posts.user)
    posts: PostEntity[];
}