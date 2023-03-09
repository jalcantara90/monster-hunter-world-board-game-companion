import { Provider } from '@nestjs/common';

import { WeaponMapper } from './infrastructure/repository/WeaponMapper';
import { WEAPON_REPOSITORY } from './domain/repository/WeaponRepository';
import { WeaponTypeORMRepository } from './infrastructure/repository/WeaponTypeORMRepository';

export const weaponProviders: Provider[] = [
  {
    provide: WEAPON_REPOSITORY,
    useClass: WeaponTypeORMRepository,
  },
  WeaponMapper,
];
