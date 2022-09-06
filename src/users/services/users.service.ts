import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateUserDto } from '../dtos/create.user.dto';
import UserEntity from '../entities/user.entity';
import { UpdateUserDto } from '../dtos/update.user.dto';
import { CreateUserProfileDto } from '../dtos/create.user.profile.dto';
import ProfileEntity from '../entities/profile.entity';
import PostEntity from '../entities/post.entity';

@Injectable()
export class UsersService {
    // will now inject the repository API to be able to communicate with our local db
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
        @InjectRepository(ProfileEntity) private profileRepository: Repository<ProfileEntity>,
        @InjectRepository(PostEntity) private postRepository: Repository<PostEntity>
    ) { }

    async createUser(userDto: CreateUserDto): Promise<any> {
        const userEntity: UserEntity = this.userRepository.create({ ...userDto });
        await this.userRepository.save(userEntity);
        return { status: 200, message: 'user created successfully' };
    }

    async getAllUsers(): Promise<UserEntity[]> {
        return await this.userRepository.find({ relations: ['profile'] });
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        await this.userRepository.update({ id }, { ...updateUserDto });
        return await this.userRepository.findOne(id);
    }

    async deleteUser(id: number): Promise<any> {
        await this.userRepository.delete(id);
        return { status: 200, message: 'user deleted successfully' };
    }

    async createUserprofile(profileDto: CreateUserProfileDto, userId: number): Promise<any> {
        const user = await this.userRepository.findOne(userId);
        if (!user) throw new BadRequestException('user not found');

        const profileEntity = this.profileRepository.create({ ...profileDto });
        await this.profileRepository.save(profileEntity);
        user.profile = profileEntity;
        return await this.userRepository.save(user);
    }
}
