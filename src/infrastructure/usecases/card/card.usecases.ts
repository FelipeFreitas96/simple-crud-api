import { Injectable } from '@nestjs/common';
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
  // create
  async createCard(dto: CreateCardDTO) {
    return this.cardRepository.addCard({
      title: dto.title,
      description: dto.description,
    });
  }

  // read
  async getCardById(dto: GetCardDTO) {
    return this.cardRepository.getCardById({ id: dto.id });
  }

  // get all
  async getCards() {
    return this.cardRepository.getCards();
  }

  // update
  async updateCard(dto: UpdateCardDTO) {
    return this.cardRepository.updateCard(
      { id: dto.id },
      { title: dto.title, description: dto.description },
    );
  }

  // delete
  async deleteCard(dto: DeleteCardDTO) {
    return this.cardRepository.deleteCard({ id: dto.id });
  }
}
