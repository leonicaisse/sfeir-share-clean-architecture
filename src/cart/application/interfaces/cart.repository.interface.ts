import { Cart, CartItem } from './../../domain/entities/cart.entity';

export interface CartRepository {
  getCart(): Promise<Cart>;
  addToCart(item: CartItem): Promise<Cart>;
}
