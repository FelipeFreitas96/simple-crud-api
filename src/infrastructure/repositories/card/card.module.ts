import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from '../../schemas/card.schema';
import { CardRepository } from './card.repository';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const host = configService.get('database.host') || 'mongodb';
        const dbname = configService.get('database.dbname') || 'database';
        return {
          uri: `mongodb://${host}:27017/${dbname}`,
        };
      },
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  providers: [CardRepository],
  exports: [CardRepository],
})
export class CardModule {}
