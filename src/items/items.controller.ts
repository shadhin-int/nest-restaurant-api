import {
  Controller,
  Body,
  Get,
  Post,
  Delete,
  Put,
  Param,
  UseGuards,
} from '@nestjs/common';
import { Item } from '../item';
import { ItemsService } from './items.service';
import { Items } from '../items';
import { AuthGuard } from '@nestjs/passport';

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

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body('item') item: Item): Promise<void> {
    this.itemService.create(item);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  async update(@Body('item') item: Item): Promise<void> {
    this.itemService.update(item);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.itemService.delete(id);
  }
}
