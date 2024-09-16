import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICardRepository } from '../../../domain/repositories/cardRepository.interface';
import { Card } from '../../schemas/card.schema';
import { Model } from 'mongoose';
import { CardEntity } from '../../../domain/entities/card.entities';
import { CardMapper } from '../../../domain/mappers/card.mapper';
import {
  CreateCardDTO,
  DeleteCardDTO,
  GetCardDTO,
  UpdateCardDTO,
} from 'src/infrastructure/dtos/card.dto';

@Injectable()
export class CardRepository implements ICardRepository {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}
  async getCardById(props: GetCardDTO): Promise<CardEntity> {
    const card = await this.cardModel.findOne({ _id: props.id });
    if (!card) return null;
    return CardMapper(card);
  }
  async getCards(): Promise<CardEntity[]> {
    const cards = await this.cardModel.find();
    return cards.map(CardMapper);
  }
  async updateCard(props: GetCardDTO, updateProps: UpdateCardDTO) {
    const card = await this.cardModel.findByIdAndUpdate(props.id, updateProps);
    if (!card) return null;
    return CardMapper(card);
  }
  async deleteCard(props: DeleteCardDTO) {
    const card = await this.cardModel.findByIdAndDelete(props.id);
    if (!card) return null;
    return CardMapper(card);
  }
  async addCard(props: CreateCardDTO): Promise<CardEntity> {
    const card = await this.cardModel.create({
      description: props.description,
      title: props.title,
    });
    if (!card) return null;
    return CardMapper(card);
  }
}
