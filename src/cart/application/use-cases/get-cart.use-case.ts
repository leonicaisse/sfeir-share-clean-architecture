import { Inject, Injectable } from '@nestjs/common';
import { CartRepository } from './../../application/interfaces/cart.repository.interface';

@Injectable()
export class GetCartUseCase {
  constructor(
    @Inject('CartRepository')
    private readonly cartRepository: CartRepository,
  ) {}
  execute() {
    return this.cartRepository.getCart();
  }
}
