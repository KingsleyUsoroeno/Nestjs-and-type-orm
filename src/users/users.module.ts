import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/user.controller';
import UserEntity from './entities/user.entity';
import ProfileEntity from './entities/profile.entity';
import PostEntity from './entities/post.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([UserEntity, ProfileEntity, PostEntity])
  ]
})
export class UsersModule { }
