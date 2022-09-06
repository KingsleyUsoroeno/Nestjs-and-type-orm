import { Controller, Post, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client-dto';

@Controller('clients')
export class ClientsController {
    constructor(private readonly clientsService: ClientsService) { }

    @Post()
    async createClient(@Body() createClientDto: CreateClientDto): Promise<any> {
        console.log("createClientDto is", JSON.stringify(createClientDto));
        return this.clientsService.createClient(createClientDto);

    }
}
