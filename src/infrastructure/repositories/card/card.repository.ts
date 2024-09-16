import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICardRepository } from 'src/domain/repositories/cardRepository.interface';
import { Card } from '../../schemas/card.schema';
import { Model } from 'mongoose';
import { ICard } from 'src/domain/entities/card.entities';
import { CardMapper } from 'src/domain/mappers/card.mapper';
import { CreateCardDTO, UpdateCardDTO } from 'src/infrastructure/dtos/card.dto';

@Injectable()
export class CardRepository implements ICardRepository {
  constructor(@InjectModel(Card.name) private cardModel: Model<Card>) {}
  async getCardById(props: Pick<ICard, 'id'>): Promise<ICard> {
    const card = await this.cardModel.findById(props.id);
    return CardMapper(card);
  }
  async getCards(): Promise<ICard[]> {
    const cards = await this.cardModel.find();
    return cards.map(CardMapper);
  }
  async updateCard(props: Pick<ICard, 'id'>, updateProps: UpdateCardDTO) {
    const card = await this.cardModel.findByIdAndUpdate(props.id, updateProps);
    return CardMapper(card);
  }
  async deleteCard(props: Pick<ICard, 'id'>) {
    await this.cardModel.findByIdAndDelete(props.id);
  }
  async addCard(props: CreateCardDTO): Promise<ICard> {
    const card = await this.cardModel.create({
      description: props.description,
      title: props.title,
    });
    return CardMapper(card);
  }
}
