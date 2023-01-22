import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from "../entities/client.entity";
import { Repository } from 'typeorm';
import { CreateClientDto } from "../dto/create-client-dto";

@Injectable()
export class ClientRepository {
    constructor(@InjectRepository(ClientEntity) private clientRepository: Repository<ClientEntity>) { }

    public async createClient(createClientDto: CreateClientDto): Promise<any> {
        const client = this.clientRepository.create({ ...createClientDto });
        await this.clientRepository.save(client);
        return client;
    }

    public async saveClient(clientEntity: ClientEntity): Promise<ClientEntity> {
        return this.clientRepository.save(clientEntity);
    }

    public async findClientById(clientId): Promise<ClientEntity> {
        const clientEntity = await this.clientRepository.findOne(clientId);
        if (!clientEntity) {
            throw new NotFoundException(`client with id ${clientId} not found`);
        }
        return clientEntity;
    }

    public async deleteClient(clientId: number): Promise<any> {
        await this.findClientById(clientId);
        return await this.clientRepository.delete(clientId);
    }

    public async findAll(): Promise<ClientEntity[]> {
        return this.clientRepository
            .createQueryBuilder('clients')
            .getMany()
    }

}