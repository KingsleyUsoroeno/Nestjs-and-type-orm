import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionEntity } from './entities/transaction.entity';
import { GetTransactionByClientIdResponse } from './response/get-transactions-by-clientId-response';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @Post("/create/:clientId")
  public async createTransaction(
    @Param("clientId", new ParseIntPipe()) clientId: number,
    @Body() createTransactionDto: CreateTransactionDto): Promise<any> {
    console.log("createTransactionDto is", JSON.stringify(createTransactionDto));
    return this.transactionsService.createTransaction(clientId, createTransactionDto);
  }

  @Get()
  public async findAll(): Promise<TransactionEntity[]> {
    return this.transactionsService.findAll();
  }

  @Get('/:clientId')
  public async getAllClientTransactions(
    @Param('clientId', new ParseIntPipe()) clientId: number
  ): Promise<TransactionEntity[]> {
    return this.transactionsService.findTransactionsByClientId(clientId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }
}
