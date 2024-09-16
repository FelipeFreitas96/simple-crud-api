import { ApiProperty, OmitType } from '@nestjs/swagger';
import { CardEntity } from 'src/domain/entities/card.entities';
import { IsObjectIdConstraint } from '../helpers/objectid-parser';
import { Validate } from 'class-validator';

export class CreateCardDTO extends OmitType(CardEntity, ['id']) {}
export class UpdateCardDTO extends OmitType(CardEntity, ['id']) {}
export class GetCardDTO {
  @ApiProperty()
  @Validate(IsObjectIdConstraint)
  id: string;
}

export class DeleteCardDTO {
  @ApiProperty()
  @Validate(IsObjectIdConstraint)
  id: string;
}
