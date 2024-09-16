import { Module } from '@nestjs/common';
import { CardControllerModule } from './controller/card/card.module';

@Module({
  providers: [CardControllerModule],
})
export class AppModule {}
