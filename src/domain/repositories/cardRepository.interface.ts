import { CreateCardDTO, UpdateCardDTO } from 'src/infrastructure/dtos/card.dto';
import { CardEntity } from '../entities/card.entities';

export interface ICardRepository {
  addCard(props: CreateCardDTO): Promise<CardEntity>;
  getCardById(props: Pick<CardEntity, 'id'>): Promise<CardEntity>;
  getCards(): Promise<CardEntity[]>;
  updateCard(
    props: Pick<CardEntity, 'id'>,
    updateProps: UpdateCardDTO,
  ): Promise<CardEntity>;
  deleteCard(props: Pick<CardEntity, 'id'>): Promise<CardEntity>;
}
