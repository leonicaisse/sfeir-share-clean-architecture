import { Module } from '@nestjs/common';
import { CartController } from './presentation/controllers/cart.controller';
import { GetCartUseCase } from './application/use-cases/get-cart.use-case';
import { InMemoryCartRepository } from './infrastructure/repositories/in-memory-cart.repository';
import { AddToCartUseCase } from './application/use-cases/add-to-cart.use-case';

@Module({
  imports: [],
  controllers: [CartController],
  providers: [
    GetCartUseCase,
    AddToCartUseCase,
    {
      provide: 'CartRepository',
      useClass: InMemoryCartRepository,
    },
  ],
})
export class CartModule {}
