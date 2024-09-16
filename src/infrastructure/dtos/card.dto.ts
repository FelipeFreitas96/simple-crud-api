import { ICard } from 'src/domain/entities/card.entities';

export type CreateCardDTO = Omit<ICard, 'id'>;
export type UpdateCardDTO = Partial<ICard>;
export type GetCardDTO = Pick<ICard, 'id'>;
export type DeleteCardDTO = Pick<ICard, 'id'>;
