import {
  CreateCardDTO,
  ICard,
  UpdateCardDTO,
} from '../entities/card.entities';

export interface ICardRepository {
  addCard(props: CreateCardDTO): Promise<ICard>;
  getCardById(props: Pick<ICard, 'id'>): Promise<ICard>;
  getCards(): Promise<ICard[]>;
  updateCard(
    props: Pick<ICard, 'id'>,
    updateProps: UpdateCardDTO,
  ): Promise<ICard>;
  deleteCard(props: Pick<ICard, 'id'>): Promise<void>;
}
