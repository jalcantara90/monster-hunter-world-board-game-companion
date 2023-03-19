import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { inventoryProviders } from './inventories.providers';
import {
  InventoryEntity,
  InventoryItemsEntity,
} from './infrastructure/entity/Inventory.entity';
import { InventoriesController } from './infrastructure/controller/inventories.controller';
import { CreateInventoryeHandler } from './application/CreateInventory/CreateInventory.handler';
import { GetInventorieHandler } from './application/GetInventorie/GetInventorie.handler';
import { DeleteInventorieHandler } from './application/DeleteInventorie/DeleteInventorie.handler';
import { UpdateInventorieHandler } from './application/UpdateInventorie/UpdateInventorie.handler';
import { GetInventorieListHandler } from './application/GetInventorieList/GetInventorieList.handler';
import { AddMaterialHandler } from './application/AddMaterial/AddMaterial.handler';
import { CraftArmorHandler } from './application/CraftArmor/CraftArmor.handler';
import { armorProviders } from '../armors/armors.providers';
import { ArmorCraftingEntity, ArmorEntity } from '../armors/infrastructure/entity/Armor.entity';

const commandHandlers = [
  CreateInventoryeHandler,
  GetInventorieHandler,
  UpdateInventorieHandler,
  DeleteInventorieHandler,
  GetInventorieListHandler,
  AddMaterialHandler,
  CraftArmorHandler
];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([InventoryEntity, InventoryItemsEntity, ArmorCraftingEntity, ArmorEntity]),
  ],
  controllers: [InventoriesController],
  providers: [...commandHandlers, ...inventoryProviders, ...armorProviders],
})
export class InventoriesModule {}
