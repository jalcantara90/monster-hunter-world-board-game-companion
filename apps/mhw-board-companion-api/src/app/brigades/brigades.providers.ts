import { Provider } from '@nestjs/common';

import { BrigadeMapper } from './infrastructure/repository/BrigadeMapper';
import { BRIGADE_REPOSITORY } from './domain/repository/BrigadeRepository';
import { BrigadeTypeORMRepository } from './infrastructure/repository/BrigadeTypeORMRepository';

export const brigadeProviders: Provider[] = [
  {
    provide: BRIGADE_REPOSITORY,
    useClass: BrigadeTypeORMRepository,
  },
  BrigadeMapper
];
