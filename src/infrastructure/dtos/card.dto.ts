import { OmitType, PickType } from '@nestjs/swagger';
import { CardEntity } from 'src/domain/entities/card.entities';

export class CreateCardDTO extends OmitType(CardEntity, ['id']) {}
export class UpdateCardDTO extends OmitType(CardEntity, ['id']) {}
export class GetCardDTO extends PickType(CardEntity, ['id']) {}
export class DeleteCardDTO extends PickType(CardEntity, ['id']) {}
