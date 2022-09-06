import { Injectable } from '@nestjs/common';
import { BankersRepository } from './repository/banker.repository';
import { CreateBankerDto } from './dto/create-banker-dto';

@Injectable()
export class BankerService {
    constructor(private readonly bankersRepository: BankersRepository) { }

    public async createBanker(bankerDto: CreateBankerDto): Promise<any> {
        return this.bankersRepository.createBanker(bankerDto);
    }
}
