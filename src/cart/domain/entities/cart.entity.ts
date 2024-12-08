import { Product } from './product.entity';

export interface CartItem extends Product {
  quantity: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
}
