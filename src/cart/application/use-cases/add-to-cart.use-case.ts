import { Inject, Injectable } from '@nestjs/common';
import { CartRepository } from './../interfaces/cart.repository.interface';
import { Cart } from './../../domain/entities/cart.entity';
import { AddToCartDto } from './../dto/add-to-cart.dto';

@Injectable()
export class AddToCartUseCase {
  constructor(
    @Inject('CartRepository') private readonly cartRepository: CartRepository,
  ) {}

  execute(product: AddToCartDto): Promise<Cart> {
    return this.cartRepository.addToCart(product);
  }
}
