import { Module } from '@nestjs/common';
import { CardControllerModule } from './controller/card/card.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    CardControllerModule,
  ],
})
export class AppModule {}
