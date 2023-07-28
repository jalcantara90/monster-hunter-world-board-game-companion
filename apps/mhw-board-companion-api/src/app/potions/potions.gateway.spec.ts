import { Test, TestingModule } from '@nestjs/testing';
import { PotionsGateway } from './potions.gateway';

describe('PotionsGateway', () => {
  let gateway: PotionsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PotionsGateway],
    }).compile();

    gateway = module.get<PotionsGateway>(PotionsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
