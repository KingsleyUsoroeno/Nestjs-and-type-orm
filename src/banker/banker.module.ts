import { Module } from '@nestjs/common';
import { BankerService } from './banker.service';
import { BankerController } from './banker.controller';
import { BankersRepository } from './repository/banker.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankerEntity } from './entities/banker.entity';

@Module({
  providers: [BankerService, BankersRepository],
  controllers: [BankerController],
  imports: [
    TypeOrmModule.forFeature([BankerEntity])
  ]
})
export class BankerModule { }
