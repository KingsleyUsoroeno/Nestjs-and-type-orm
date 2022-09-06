import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './entities/client.entity';
import { ClientRepository } from './repository/client.repository';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ClientRepository],
  imports: [
    TypeOrmModule.forFeature([ClientEntity]),
  ],
  exports: [ClientRepository]
})
export class ClientsModule { }
