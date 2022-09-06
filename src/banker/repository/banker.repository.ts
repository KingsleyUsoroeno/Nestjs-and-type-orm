import { Injectable } from "@nestjs/common";
import { BankerEntity } from "../entities/banker.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBankerDto } from "../dto/create-banker-dto";
import { ClientRepository } from "../../clients/repository/client.repository";

@Injectable()
export class BankersRepository {
    constructor(
        @InjectRepository(BankerEntity) private bankerRepository: Repository<BankerEntity>,
        private readonly clientsRepository: ClientRepository
    ) { }

    public async createBanker(bankerDto: CreateBankerDto): Promise<any> {
        const bankerEntity = this.bankerRepository.create({ ...bankerDto });
        await this.bankerRepository.save(bankerEntity);
        return bankerEntity;
    }

    public async attachBankerToClient(bankerId: number, clientId: number): Promise<any> {
        const client = this.clientsRepository.findClientById(clientId);
    }


}