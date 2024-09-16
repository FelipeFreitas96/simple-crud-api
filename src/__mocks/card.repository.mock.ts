import { CardEntity } from '../domain/entities/card.entities';
import {
  CreateCardDTO,
  DeleteCardDTO,
  GetCardDTO,
  UpdateCardDTO,
} from '../infrastructure/dtos/card.dto';

export const VALID_ID = '66e7a133908675f096e00668';
export const INVALID_ID = '66e7ac55c8c1c240322bb112';

export class CardRepositoryMock {
  async getCardById(props: GetCardDTO): Promise<CardEntity> {
    if (props.id === INVALID_ID) return null;
    return {
      id: props.id,
      title: 'valid_title',
      description: 'valid_description',
    };
  }
  async getCards(): Promise<CardEntity[]> {
    return [
      {
        id: VALID_ID,
        title: 'valid_title',
        description: 'valid_description',
      },
    ];
  }
  async updateCard(props: GetCardDTO, updateProps: UpdateCardDTO) {
    return {
      id: props.id,
      title: updateProps.title,
      description: updateProps.description,
    };
  }
  async deleteCard(props: DeleteCardDTO) {
    if (props.id === INVALID_ID) return null;
  }
  async addCard(props: CreateCardDTO): Promise<CardEntity> {
    return {
      id: VALID_ID,
      title: props.title,
      description: props.description,
    };
  }
}
