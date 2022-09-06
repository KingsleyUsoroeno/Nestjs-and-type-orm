import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ClientsModule } from './clients/clients.module';
import { BankerModule } from './banker/banker.module';
import { TransactionsModule } from './transactions/transactions.module';
import config from './ormconfig';


@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UsersModule,
    ClientsModule,
    BankerModule,
    TransactionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
