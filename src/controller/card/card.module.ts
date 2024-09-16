import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardUsecases } from '../../infrastructure/usecases/card/card.usecases';
import { CardModule } from '../../infrastructure/repositories/card/card.module';

@Module({
  imports: [CardModule],
  controllers: [CardController],
  providers: [CardUsecases],
})
export class CardControllerModule {}
