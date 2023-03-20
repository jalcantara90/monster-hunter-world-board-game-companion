import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { weaponProviders } from './weapons.providers';
import {
  WeaponCraftingEntity,
  WeaponEntity,
} from './infrastructure/entity/Weapon.entity';
import { WeaponsController } from './infrastructure/controller/weapons.controller';
import { CreateWeaponHandler } from './application/CreateWeapon/CreateWeapon.handler';
import { GetWeaponHandler } from './application/GetWeapon/GetWeapon.handler';
import { DeleteWeaponHandler } from './application/DeleteWeapon/DeleteWeapon.handler';
import { UpdateWeaponHandler } from './application/UpdateWeapon/UpdateWeapon.handler';
import { GetWeaponListHandler } from './application/GetWeaponList/GetWeaponList.handler';
import { AddWeaponCraftingMaterialHandler } from './application/AddCraftingMaterials/AddCraftingMaterials.handler';
import { GetWeaponCraftingMaterialArmorHandler } from './application/GetCraftingMaterials/GetCraftingMaterials.handler';

const commandHandlers = [
  CreateWeaponHandler,
  GetWeaponHandler,
  UpdateWeaponHandler,
  DeleteWeaponHandler,
  GetWeaponListHandler,
  AddWeaponCraftingMaterialHandler,
  GetWeaponCraftingMaterialArmorHandler
];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([WeaponEntity, WeaponCraftingEntity]),
  ],
  controllers: [WeaponsController],
  providers: [...commandHandlers, ...weaponProviders],
})
export class WeaponsModule {}
