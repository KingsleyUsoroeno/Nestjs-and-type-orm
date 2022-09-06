import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { CreateBankerDto } from './dto/create-banker-dto';
import { BankerService } from './banker.service';

@Controller('banker')
export class BankerController {
    constructor(private readonly bankersService: BankerService) { }

    @Post()
    public async createBaker(@Body() createBankerDto: CreateBankerDto): Promise<any> {
        return this.bankersService.createBanker(createBankerDto);
    }

    @Put("/attach-to-client/:clientId/:bankerId")
    public async attachBankerToClient(
        @Param('clientId') clientId: number,
        @Param('bankerId') bankerId: number,
    ): Promise<any> {

    }
}
