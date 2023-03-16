import { Provider } from '@nestjs/common';

import { ArmorMapper } from './infrastructure/repository/ArmorMapper';
import { ARMOR_REPOSITORY } from './domain/repository/ArmorRepository';
import { ArmorTypeORMRepository } from './infrastructure/repository/ArmorTypeORMRepository';
import { ARMOR_CRAFTING_REPOSITORY } from './domain/repository/ArmorCraftingRepository';
import { ArmorCraftingTypeORMRepository } from './infrastructure/repository/ArmorCraftingMaterialsTypeORMRepository';
import { ArmorCraftingMaterialMapper } from './infrastructure/repository/CraftingMaterialMapper';

export const armorProviders: Provider[] = [
  {
    provide: ARMOR_REPOSITORY,
    useClass: ArmorTypeORMRepository,
  },
  {
    provide: ARMOR_CRAFTING_REPOSITORY,
    useClass: ArmorCraftingTypeORMRepository
  },
  ArmorMapper,
  ArmorCraftingMaterialMapper
];
