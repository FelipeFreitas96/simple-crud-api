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
import {
  CreateCardDTO,
  DeleteCardDTO,
  GetCardDTO,
  UpdateCardDTO,
} from '../../infrastructure/dtos/card.dto';

@Controller()
export class CardController {
  constructor(private readonly cardUsecases: CardUsecases) {}
  @Get()
  async getCards() {
    return this.cardUsecases.getCards();
  }

  @Get(':id')
  async getCardById(@Param() param: GetCardDTO) {
    return this.cardUsecases.getCardById({ id: param.id });
  }

  @Post()
  async createCard(@Body() body: CreateCardDTO) {
    return this.cardUsecases.createCard(body);
  }

  @Put(':id')
  async updateCard(@Param() param: GetCardDTO, @Body() body: UpdateCardDTO) {
    return this.cardUsecases.updateCard(param.id, {
      title: body.title,
      description: body.description,
    });
  }

  @Delete(':id')
  async deleteCard(@Param() param: DeleteCardDTO) {
    return this.cardUsecases.deleteCard({ id: param.id });
  }
}
