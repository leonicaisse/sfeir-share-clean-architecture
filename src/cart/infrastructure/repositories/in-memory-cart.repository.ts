import { Injectable } from '@nestjs/common';
import { Cart, CartItem } from './../../domain/entities/cart.entity';
import { CartRepository } from './../../application/interfaces/cart.repository.interface';

@Injectable()
export class InMemoryCartRepository implements CartRepository {
  private readonly cart: Cart = {
    id: 'mon-super-cart',
    items: [],
  };

  async getCart(): Promise<Cart> {
    return this.cart;
  }

  async addToCart(item: CartItem): Promise<Cart> {
    this.cart.items.push(item);
    return this.cart;
  }
}
