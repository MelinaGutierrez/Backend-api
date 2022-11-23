import { Test, TestingModule } from '@nestjs/testing';
import { FloresService } from './flores.service';

describe('FloresService', () => {
  let service: FloresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FloresService],
    }).compile();

    service = module.get<FloresService>(FloresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
