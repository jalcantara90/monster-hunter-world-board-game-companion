import { Test, TestingModule } from '@nestjs/testing';
import { BrigadesController } from './brigades.controller';
import { BrigadesService } from './brigades.service';

describe('BrigadesController', () => {
  let controller: BrigadesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrigadesController],
      providers: [BrigadesService],
    }).compile();

    controller = module.get<BrigadesController>(BrigadesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
