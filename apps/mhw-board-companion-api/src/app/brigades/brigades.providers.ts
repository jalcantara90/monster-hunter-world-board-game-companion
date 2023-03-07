import { Provider } from '@nestjs/common';

import { BrigadeMapper } from './infrastrucure/repository/BrigadeMapper';
import { BRIGADE_REPOSITORY } from './domain/repository/BrigadeRepository';
import { BrigadeTypeORMRepository } from './infrastrucure/repository/BrigadeTypeORMRepository';

export const brigadeProviders: Provider[] = [
  {
    provide: BRIGADE_REPOSITORY,
    useClass: BrigadeTypeORMRepository,
  },
  BrigadeMapper
];
