import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sell } from './sell.entity';
import { CreateSellDto } from 'src/sell/dto/create-sell.dto';
import { UpdateSellDto } from 'src/sell/dto/update-sell.dto';
import { SellRepository } from 'src/sell/sell.repository';

@Injectable()
export class SellService {
  constructor(private sellRepository: SellRepository) {}
  
  async createSell(createBuyDto: CreateSellDto): Promise<any>{
    return this.sellRepository.createSell(createBuyDto);
  }

  async getSell(key: any, address: string): Promise<any> {
    return this.sellRepository.getSell(key, address);
  }

  async getAllSell(address: string): Promise<any> {
    return this.sellRepository.getAllSell(address);
  }

  async updateSell(updateSellDto: UpdateSellDto): Promise<any> {
    return this.sellRepository.updateSell(updateSellDto);
  }
}
