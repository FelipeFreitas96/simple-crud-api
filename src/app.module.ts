import { Module } from '@nestjs/common';
import { CardControllerModule } from './controller/card/card.module';

@Module({
  imports: [CardControllerModule],
})
export class AppModule {}
