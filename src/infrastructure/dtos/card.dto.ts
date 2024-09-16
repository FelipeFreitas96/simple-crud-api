import { ApiProperty, OmitType, PickType } from '@nestjs/swagger';
import { CardEntity } from '../../domain/entities/card.entities';
import { IsObjectIdConstraint } from '../helpers/objectid-parser';
import { Validate } from 'class-validator';
import { IsDefinedWithMaxLength } from '../helpers/isdefined-with-max-length';

export class CreateCardDTO extends OmitType(CardEntity, ['id']) {
  @ApiProperty()
  @IsDefinedWithMaxLength({ property: 'Title', maxLength: 255 })
  title: string;
  @ApiProperty()
  @IsDefinedWithMaxLength({ property: 'Description', maxLength: 255 })
  description: string;
}

export class UpdateCardDTO extends OmitType(CardEntity, ['id']) {
  @ApiProperty()
  @IsDefinedWithMaxLength({ property: 'Title', maxLength: 255 })
  title: string;
  @ApiProperty()
  @IsDefinedWithMaxLength({ property: 'Description', maxLength: 255 })
  description: string;
}

export class GetCardDTO extends PickType(CardEntity, ['id']) {
  @ApiProperty()
  @Validate(IsObjectIdConstraint)
  id: string;
}

export class DeleteCardDTO extends PickType(CardEntity, ['id']) {
  @ApiProperty()
  @Validate(IsObjectIdConstraint)
  id: string;
}
