import { Injectable } from '@nestjs/common';
import { Item } from '../item';
import { Items } from '../items';

@Injectable()
export class ItemsService {
  private readonly items: Items = {
    1: {
      id: 1,
      name: 'Burger',
      price: 5.99,
      description: 'Tasty',
      image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
    },
    2: {
      id: 2,
      name: 'pizza',
      price: 2.99,
      description: 'Informative',
      image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
    },
  };

  findALl(): Items {
    return this.items;
  }

  create(newItem: Item): void {
    const id = new Date().valueOf();
    this.items[id] = {
      ...newItem,
      id,
    };
  }

  find(id: number): Item {
    const record: Item = this.items[id];

    if (record) {
      return record;
    }

    throw new Error('No record found!');
  }
  update(updateItem: Item): void {
    if (this.items[updateItem.id]) {
      this.items[updateItem.id] = updateItem;
      return;
    }
    throw new Error('No item found to update');
  }

  delete(id: number): void {
    const record: Item = this.items[id];

    if (record) {
      delete this.items[id];
      return;
    }
    throw new Error('No item found to delete');
  }
}
