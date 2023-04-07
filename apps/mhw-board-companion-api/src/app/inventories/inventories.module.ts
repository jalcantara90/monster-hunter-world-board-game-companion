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
import { GetInventorieListHandler } from './application/GetInventorieList/GetInventorieList.handler';
import { AddMaterialHandler } from './application/AddMaterial/AddMaterial.handler';
import { CraftArmorHandler } from './application/CraftArmor/CraftArmor.handler';
import { armorProviders } from '../armors/armors.providers';
import {
  ArmorCraftingEntity,
  ArmorEntity,
} from '../armors/infrastructure/entity/Armor.entity';
import { CraftWeaponHandler } from './application/CraftWeapon/CraftWeapon.handler';
import { UpdateInventoryItemHandler } from './application/UpdateInventoryItem/UpdateInventoryItemHandler';
import {
  WeaponCraftingEntity,
  WeaponEntity,
} from '../weapons/infrastructure/entity/Weapon.entity';
import { weaponProviders } from '../weapons/weapons.providers';

const commandHandlers = [
  CreateInventoryeHandler,
  GetInventorieHandler,
  DeleteInventorieHandler,
  GetInventorieListHandler,
  AddMaterialHandler,
  CraftArmorHandler,
  CraftWeaponHandler,
  UpdateInventoryItemHandler,
];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([
      InventoryEntity,
      InventoryItemsEntity,
      ArmorCraftingEntity,
      ArmorEntity,
      WeaponCraftingEntity,
      WeaponEntity,
    ]),
  ],
  controllers: [InventoriesController],
  providers: [
    ...commandHandlers,
    ...inventoryProviders,
    ...armorProviders,
    ...weaponProviders,
  ],
})
export class InventoriesModule {}
