import { CardRepository } from '../../../infrastructure/repositories/card/card.repository';
import { CardUsecases } from '../../../infrastructure/usecases/card/card.usecases';

describe('CardUsecases', () => {
  let cardUsecases: CardUsecases;
  let cardRepository: CardRepository;

  beforeEach(() => {
    cardRepository = new CardRepository(null);
    cardUsecases = new CardUsecases(cardRepository);
  });

  describe('getCards', () => {
    it('should return an array of cards', async () => {
      const result = [
        {
          id: 'valid_id',
          title: 'valid_title',
          description: 'valid_description',
        },
      ];
      jest.spyOn(cardRepository, 'getCards').mockResolvedValueOnce(result);
      expect(await cardUsecases.getCards()).toEqual(result);
    });

    it('should return an empty array of cards', async () => {
      const result = [];
      jest.spyOn(cardRepository, 'getCards').mockResolvedValueOnce(result);
      expect(await cardUsecases.getCards()).toEqual(result);
    });
  });

  describe('getCardById', () => {
    it('should return a valid card', async () => {
      const result = {
        id: 'valid_id',
        title: 'valid_title',
        description: 'valid_description',
      };
      jest.spyOn(cardRepository, 'getCardById').mockResolvedValueOnce(result);
      expect(await cardUsecases.getCardById({ id: 'valid_id' })).toEqual(
        result,
      );
    });

    it('should throw if card is not found', async () => {
      jest.spyOn(cardRepository, 'getCardById').mockResolvedValueOnce(null);
      await expect(
        cardUsecases.getCardById({ id: 'invalid_id' }),
      ).rejects.toThrow('Not Found Exception');
    });
  });

  describe('createCard', () => {
    it('should return a valid card', async () => {
      const result = {
        id: 'valid_id',
        title: 'valid_title',
        description: 'valid_description',
      };

      jest.spyOn(cardRepository, 'addCard').mockResolvedValueOnce(result);
      expect(
        await cardUsecases.createCard({
          title: result.title,
          description: result.description,
        }),
      ).toEqual(result);
    });
  });

  describe('DeleteCard', () => {
    it('should delete a card', async () => {
      const result = {
        id: 'valid_id',
        title: 'valid_title',
        description: 'valid_description',
      };

      jest.spyOn(cardRepository, 'deleteCard').mockResolvedValueOnce(result);
      expect(await cardUsecases.deleteCard({ id: 'valid_id' })).toEqual(result);
    });
    it('should throw if card is not found', async () => {
      jest.spyOn(cardRepository, 'deleteCard').mockResolvedValueOnce(null);
      await expect(
        cardUsecases.deleteCard({ id: 'invalid_id' }),
      ).rejects.toThrow('Not Found Exception');
    });
  });

  describe('updateCard', () => {
    it('should return a valid card', async () => {
      const result = {
        id: 'valid_id',
        title: 'valid_title',
        description: 'valid_description',
      };

      const updatedResult = {
        id: 'valid_id',
        title: 'updated_title',
        description: 'updated_description',
      };

      jest.spyOn(cardRepository, 'getCardById').mockResolvedValueOnce(result);
      jest
        .spyOn(cardRepository, 'updateCard')
        .mockResolvedValueOnce(updatedResult);
      jest
        .spyOn(cardRepository, 'getCardById')
        .mockResolvedValueOnce(updatedResult);

      expect(
        await cardUsecases.updateCard('valid_id', {
          title: updatedResult.title,
          description: updatedResult.description,
        }),
      ).toEqual(updatedResult);
    });

    it('should throw if card is not found', async () => {
      jest.spyOn(cardRepository, 'getCardById').mockResolvedValueOnce(null);
      await expect(
        cardUsecases.updateCard('invalid_id', {
          title: 'valid_title',
          description: 'valid_description',
        }),
      ).rejects.toThrow('Not Found Exception');
    });
  });
});
