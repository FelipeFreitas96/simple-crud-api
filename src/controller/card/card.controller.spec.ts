import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CardControllerModule } from './card.module';
import { CardRepository } from '../../infrastructure/repositories/card/card.repository';
import {
  CardRepositoryMock,
  INVALID_ID,
  VALID_ID,
} from '../../__mocks/card.repository.mock';
import * as request from 'supertest';
import { ConfigModule } from '@nestjs/config';

describe('CardController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          load: [
            () => ({
              database: {
                host: 'localhost',
                port: 27017,
                dbname: 'database',
              },
            }),
          ],
        }),
        CardControllerModule,
      ],
    })
      .overrideProvider(CardRepository)
      .useClass(CardRepositoryMock)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        disableErrorMessages: false,
      }),
    );

    await app.init();
  });

  describe('/ (GET)', () => {
    it('should return a valid array of cards', async () => {
      const response = await request(app.getHttpServer()).get('/').expect(200);
      expect(response.body).toEqual([
        {
          id: VALID_ID,
          title: 'valid_title',
          description: 'valid_description',
        },
      ]);
    });
  });

  describe('/:id (GET)', () => {
    it('should return a valid card', async () => {
      const response = await request(app.getHttpServer())
        .get('/' + VALID_ID)
        .expect(200);

      expect(response.body).toEqual({
        id: VALID_ID,
        title: 'valid_title',
        description: 'valid_description',
      });
    });
    it('should throw when receive an invalid card', async () => {
      const response = await request(app.getHttpServer())
        .get('/' + INVALID_ID)
        .expect(404);

      expect(response.body).toEqual({
        error: 'Not Found',
        message: ['Card not found'],
        statusCode: 404,
      });
    });
  });

  describe('/:id (DELETE)', () => {
    it('should return a valid card', async () => {
      const response = await request(app.getHttpServer())
        .delete('/' + VALID_ID)
        .expect(200);

      expect(response.body).toEqual({});
    });
    it('should throw when receive an invalid card', async () => {
      const response = await request(app.getHttpServer())
        .delete('/' + INVALID_ID)
        .expect(404);

      expect(response.body).toEqual({
        error: 'Not Found',
        message: ['Card not found'],
        statusCode: 404,
      });
    });
  });

  describe('/ (POST)', () => {
    it('should return a valid card', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({
          title: 'valid_title',
          description: 'valid_description',
        })
        .expect(201);

      expect(response.body).toEqual({
        id: VALID_ID,
        title: 'valid_title',
        description: 'valid_description',
      });
    });
    it('should throw when receive empty body params', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({})
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is required', 'Description is required'],
        statusCode: 400,
      });
    });
    it('should throw when receive invalid body params', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({
          description: '',
          title: '',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is required', 'Description is required'],
        statusCode: 400,
      });
    });
    it('should throw when receive only description on body params', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({
          description: 'any_description',
          title: '',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is required'],
        statusCode: 400,
      });
    });
    it('should throw when receive only title on body params', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({
          description: '',
          title: 'any_title',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Description is required'],
        statusCode: 400,
      });
    });
    it('should throw when receive 255 length description', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({
          description: '0'.repeat(256),
          title: 'any_title',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Description is too long'],
        statusCode: 400,
      });
    });
    it('should throw when receive 255 length title', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({
          description: 'any_description',
          title: '0'.repeat(255),
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is too long'],
        statusCode: 400,
      });
    });
    it('should throw when both are 255 length', async () => {
      const response = await request(app.getHttpServer())
        .post('/')
        .send({
          description: '0'.repeat(255),
          title: '0'.repeat(255),
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is too long', 'Description is too long'],
        statusCode: 400,
      });
    });
  });

  describe('/:id (PUT)', () => {
    it('should return a valid card', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({
          title: 'valid_title',
          description: 'valid_description',
        })
        .expect(200);

      expect(response.body).toEqual({
        id: VALID_ID,
        title: 'valid_title',
        description: 'valid_description',
      });
    });

    it('should throw when receive empty body params', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({})
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is required', 'Description is required'],
        statusCode: 400,
      });
    });

    it('should throw when receive invalid body params', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({
          description: '',
          title: '',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is required', 'Description is required'],
        statusCode: 400,
      });
    });

    it('should throw when receive only description on body params', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({
          description: 'any_description',
          title: '',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is required'],
        statusCode: 400,
      });
    });

    it('should throw when receive only title on body params', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({
          description: '',
          title: 'any_title',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Description is required'],
        statusCode: 400,
      });
    });

    it('should throw when receive 255 length description', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({
          description: '0'.repeat(256),
          title: 'any_title',
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Description is too long'],
        statusCode: 400,
      });
    });

    it('should throw when receive 255 length title', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({
          description: 'any_description',
          title: '0'.repeat(255),
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is too long'],
        statusCode: 400,
      });
    });

    it('should throw when both are 255 length', async () => {
      const response = await request(app.getHttpServer())
        .put('/' + VALID_ID)
        .send({
          description: '0'.repeat(255),
          title: '0'.repeat(255),
        })
        .expect(400);

      expect(response.body).toEqual({
        error: 'Bad Request',
        message: ['Title is too long', 'Description is too long'],
        statusCode: 400,
      });
    });
  });
});
