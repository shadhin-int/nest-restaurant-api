import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { Item } from '../item';
import { ItemsService } from './items.service';
import { Items } from '../items';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  async findAll(): Promise<Items> {
    return this.itemService.findALl();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Item> {
    return this.itemService.find(id);
  }

  @Post()
  async create(@Body('item') item: Item): Promise<void> {
    this.itemService.create(item);
  }

  @Put()
  async update(@Body('item') item: Item): Promise<void> {
    this.itemService.update(item);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.itemService.delete(id);
  }
}
