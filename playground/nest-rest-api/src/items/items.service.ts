import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item, ItemDocument } from './schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>,
  ) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const newItem = new this.itemModel(createItemDto);
    return await newItem.save();
  }

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, createItemDto, {
      new: true,
    });
  }
}
