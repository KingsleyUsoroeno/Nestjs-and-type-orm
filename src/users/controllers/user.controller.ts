import { Controller, Post, Get, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import UserEntity from 'src/users/entities/user.entity';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create.user.dto';
import { UpdateUserDto } from '../dtos/update.user.dto';
import { CreateUserProfileDto } from '../dtos/create.user.profile.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
        return this.usersService.createUser(createUserDto);
    }

    @Post('/:userId/createUserProfile')
    async createUserProfile(
        @Body() profileDto: CreateUserProfileDto,
        @Param("userId") userId: number
    ): Promise<any> {
        return this.usersService.createUserprofile(profileDto, userId);
    }

    @Get()
    async getAllUsers(): Promise<UserEntity[]> {
        return this.usersService.getAllUsers();
    }

    @Put("/:userId")
    async updateUser(
        @Param('userId', ParseIntPipe) userId: number,
        @Body() updateUserDto: UpdateUserDto
    ): Promise<UserEntity> {
        return this.usersService.updateUser(userId, updateUserDto);
    }

    @Delete("/:userId")
    async deleteUserById(@Param('userId', ParseIntPipe) userId: number): Promise<any> {
        return this.usersService.deleteUser(userId);
    }

}
