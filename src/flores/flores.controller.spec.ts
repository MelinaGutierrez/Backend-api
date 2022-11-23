import { Test, TestingModule } from '@nestjs/testing';
import { FloresController } from './flores.controller';
import { FloresService } from './flores.service';

describe('FloresController', () => {
  let controller: FloresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FloresController],
      providers: [FloresService],
    }).compile();

    controller = module.get<FloresController>(FloresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
