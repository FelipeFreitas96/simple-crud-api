import { Injectable, NotFoundException } from '@nestjs/common';
import { CardRepository } from '../../repositories/card/card.repository';
import {
  CreateCardDTO,
  DeleteCardDTO,
  GetCardDTO,
  UpdateCardDTO,
} from 'src/infrastructure/dtos/card.dto';

@Injectable()
export class CardUsecases {
  constructor(private readonly cardRepository: CardRepository) {}
  async createCard(dto: CreateCardDTO) {
    return this.cardRepository.addCard({
      title: dto.title,
      description: dto.description,
    });
  }

  async getCardById(dto: GetCardDTO) {
    const card = await this.cardRepository.getCardById({ id: dto.id });
    if (!card) {
      throw new NotFoundException(['Card not found']);
    }
    return card;
  }

  async getCards() {
    return this.cardRepository.getCards();
  }

  async updateCard(id: string, dto: UpdateCardDTO) {
    const card = await this.cardRepository.getCardById({ id });
    if (!card) {
      throw new NotFoundException(['Card not found']);
    }

    await this.cardRepository.updateCard(
      { id },
      { title: dto.title, description: dto.description },
    );

    return this.cardRepository.getCardById({ id });
  }

  async deleteCard(dto: DeleteCardDTO) {
    const card = await this.cardRepository.deleteCard({ id: dto.id });
    if (!card) {
      throw new NotFoundException(['Card not found']);
    }
    return card;
  }
}
