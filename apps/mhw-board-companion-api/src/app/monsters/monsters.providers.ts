import { Provider } from '@nestjs/common';

import { MonsterMapper } from './infrastructure/repository/MonsterMapper';
import { MONSTER_REPOSITORY } from './domain/repository/MonsterRepository';
import { MonsterTypeORMRepository } from './infrastructure/repository/MonsterTypeORMRepository';

export const monsterProviders: Provider[] = [
  {
    provide: MONSTER_REPOSITORY,
    useClass: MonsterTypeORMRepository,
  },
  MonsterMapper,
];
