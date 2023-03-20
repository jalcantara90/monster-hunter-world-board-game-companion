import { Provider } from '@nestjs/common';

import { WeaponMapper } from './infrastructure/repository/WeaponMapper';
import { WEAPON_REPOSITORY } from './domain/repository/WeaponRepository';
import { WeaponTypeORMRepository } from './infrastructure/repository/WeaponTypeORMRepository';
import { WEAPON_CRAFTING_REPOSITORY } from './domain/repository/WeaponCraftingRepository';
import { WeaponCraftingTypeORMRepository } from './infrastructure/repository/WeaponCraftingMaterialTypeORMRepository';
import { WeaponCraftingMaterialMapper } from './infrastructure/repository/WeaponCraftingMapper';

export const weaponProviders: Provider[] = [
  {
    provide: WEAPON_REPOSITORY,
    useClass: WeaponTypeORMRepository,
  },
  {
    provide: WEAPON_CRAFTING_REPOSITORY,
    useClass: WeaponCraftingTypeORMRepository
  },
  WeaponMapper,
  WeaponCraftingMaterialMapper
];
