import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardUsecases } from 'src/infrastructure/usecases/card/card.usecases';

@Module({
  controllers: [CardController],
  providers: [CardUsecases],
})
export class CardControllerModule {}
