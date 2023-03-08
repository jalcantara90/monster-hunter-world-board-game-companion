import { Test, TestingModule } from '@nestjs/testing';
import { HuntersController } from './hunters.controller';

describe('HuntersController', () => {
  let controller: HuntersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HuntersController],
      providers: [],
    }).compile();

    controller = module.get<HuntersController>(HuntersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
