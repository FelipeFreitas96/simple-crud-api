import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Card {
  @Prop()
  title: string;

  @Prop()
  description: string;
}

export const CardSchema = SchemaFactory.createForClass(Card);
