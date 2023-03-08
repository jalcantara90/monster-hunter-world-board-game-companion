import { Provider } from '@nestjs/common';

import { MaterialMapper } from './infrastructure/repository/MaterialMapper';
import { MATERIAL_REPOSITORY } from './domain/repository/MaterialRepository';
import { MaterialTypeORMRepository } from './infrastructure/repository/MaterialTypeORMRepository';

export const materialProviders: Provider[] = [
  {
    provide: MATERIAL_REPOSITORY,
    useClass: MaterialTypeORMRepository,
  },
  MaterialMapper,
];
