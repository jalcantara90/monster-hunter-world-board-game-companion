import { Provider } from '@nestjs/common';

import { ArmorMapper } from './infrastructure/repository/ArmorMapper';
import { ARMOR_REPOSITORY } from './domain/repository/ArmorRepository';
import { ArmorTypeORMRepository } from './infrastructure/repository/ArmorTypeORMRepository';

export const armorProviders: Provider[] = [
  {
    provide: ARMOR_REPOSITORY,
    useClass: ArmorTypeORMRepository,
  },
  ArmorMapper,
];
