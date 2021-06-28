import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '345',
      name: 'Item 1',
      description: 'item one',
      qty: 100,
    },
    {
      id: '346',
      name: 'Item 2',
      description: 'item two',
      qty: 50,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
