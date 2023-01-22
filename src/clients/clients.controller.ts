import { Controller, Post, Body, Delete, Param, ParseIntPipe, Get } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client-dto';
import { ClientEntity } from './entities/client.entity';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { }

    @Get()
    public async getAllClients(): Promise<ClientEntity[]> {
        return this.clientsService.getAllClients();
    }

    @Post()
    public async createClient(@Body() createClientDto: CreateClientDto): Promise<any> {
        console.log("createClientDto is", JSON.stringify(createClientDto));
        return this.clientsService.createClient(createClientDto);
    }

    @Delete('/:clientId')
    public async deleteClient(@Param('clientId', new ParseIntPipe()) clientId: number): Promise<any> {
        return this.clientsService.deleteById(clientId);
    }
}
