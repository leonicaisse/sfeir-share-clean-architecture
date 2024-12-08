import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddToCartDto } from '../../application/dto/add-to-cart.dto';
import { GetCartUseCase } from './../../application/use-cases/get-cart.use-case';
import { AddToCartUseCase } from './../../application/use-cases/add-to-cart.use-case';
import { Cart } from './../../domain/entities/cart.entity';

@Controller('cart')
export class CartController {
  constructor(
    private readonly getCartUseCase: GetCartUseCase,
    private readonly addToCartUseCase: AddToCartUseCase,
  ) {}

  @Get()
  getCart(): Promise<Cart> {
    return this.getCartUseCase.execute();
  }

  @Post('add')
  addToCart(@Body() addToCartDto: AddToCartDto): Promise<Cart> {
    return this.addToCartUseCase.execute(addToCartDto);
  }
}
