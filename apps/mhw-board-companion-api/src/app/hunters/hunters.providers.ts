import { Provider } from '@nestjs/common';

import { HunterMapper } from './infrastructure/repository/HunterMapper';
import { HUNTER_REPOSITORY } from './domain/repository/HuntersRepository';
import { HunterTypeORMRepository } from './infrastructure/repository/HunterTypeORMRepository';

export const hunterProviders: Provider[] = [
  {
    provide: HUNTER_REPOSITORY,
    useClass: HunterTypeORMRepository,
  },
  HunterMapper
];
