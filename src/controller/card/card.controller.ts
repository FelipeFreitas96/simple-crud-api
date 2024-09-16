import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CardUsecases } from '../../infrastructure/usecases/card/card.usecases';
import { CreateCardDTO, UpdateCardDTO } from 'src/infrastructure/dtos/card.dto';

@Controller()
export class CardController {
  constructor(private readonly cardUsecases: CardUsecases) {}
  @Get()
  async getCards() {
    return this.cardUsecases.getCards();
  }

  @Get(':id')
  async getCardById(@Param('id') id: string) {
    return this.cardUsecases.getCardById({ id });
  }

  @Post()
  async createCard(@Body() body: CreateCardDTO) {
    return this.cardUsecases.createCard(body);
  }

  @Put(':id')
  async updateCard(@Param('id') id: string, @Body() body: UpdateCardDTO) {
    return this.cardUsecases.updateCard({
      id,
      title: body.title,
      description: body.description,
    });
  }

  @Delete(':id')
  async deleteCard(@Param('id') id: string) {
    return this.cardUsecases.deleteCard({ id });
  }
}
