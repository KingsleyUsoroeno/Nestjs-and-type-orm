import { Injectable } from '@nestjs/common';
import { ClientRepository } from './repository/client.repository';
import { CreateClientDto } from './dto/create-client-dto';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientsService {
    constructor(private readonly clientRepository: ClientRepository) { }

    public async createClient(createClientDto: CreateClientDto): Promise<any> {
        return this.clientRepository.createClient(createClientDto);
    }

    public async getClientById(clientId: number): Promise<ClientEntity> {
        return this.clientRepository.findClientById(clientId);
    }

    public async deleteById(clientId: number): Promise<any> {
        return this.clientRepository.deleteClient(clientId);
    }

    public async getAllClients(): Promise<ClientEntity[]> {
        return this.clientRepository.findAll();
    }
}
