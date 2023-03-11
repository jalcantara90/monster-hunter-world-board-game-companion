import { Provider } from '@nestjs/common';

import { InventoryMapper } from './infrastructure/repository/InventoryMapper';
import { INVENTORY_REPOSITORY } from './domain/repository/InventoryRepository';
import { InventoryTypeORMRepository } from './infrastructure/repository/InventoryTypeORMRepository';

export const inventoryProviders: Provider[] = [
  {
    provide: INVENTORY_REPOSITORY,
    useClass: InventoryTypeORMRepository,
  },
  InventoryMapper,
];
