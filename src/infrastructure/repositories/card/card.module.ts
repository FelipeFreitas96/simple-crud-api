import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from '../../schemas/card.schema';
import { CardRepository } from './card.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  providers: [CardRepository],
  exports: [CardRepository],
})
export class CardModule {}
