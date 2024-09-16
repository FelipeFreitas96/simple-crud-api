import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CardEntity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Title is required' })
  @MaxLength(255, { message: 'Title is too long' })
  title: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Description is required' })
  @MaxLength(255, { message: 'Description is too long' })
  description: string;
}
