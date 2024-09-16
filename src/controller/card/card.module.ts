import { Module } from '@nestjs/common';
import { CardController } from './card.controller';
import { CardUsecases } from 'src/infrastructure/usecases/card/card.usecases';
import { CardModule } from 'src/infrastructure/repositories/card/card.module';

@Module({
  imports: [CardModule],
  controllers: [CardController],
  providers: [CardUsecases],
})
export class CardControllerModule {}
