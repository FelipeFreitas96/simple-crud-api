import { Module } from '@nestjs/common';
import { CardModule } from '../../repositories/card/card.module';
import { CardUsecases } from './card.usecases';

@Module({
  providers: [CardModule, CardUsecases],
  exports: [CardUsecases],
})
export class CardUsecasesModule {}
