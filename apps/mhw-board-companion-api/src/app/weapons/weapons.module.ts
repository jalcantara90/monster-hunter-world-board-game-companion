import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { weaponProviders } from './weapons.providers';
import { WeaponEntity } from './infrastructure/entity/Weapon.entity';
import { WeaponsController } from './infrastructure/controller/weapons.controller';
import { CreateWeaponHandler } from './application/CreateWeapon/CreateWeapon.handler';
import { GetWeaponHandler } from './application/GetWeapon/GetWeapon.handler';
import { DeleteWeaponHandler } from './application/DeleteWeapon/DeleteWeapon.handler';
import { UpdateWeaponHandler } from './application/UpdateWeapon/UpdateWeapon.handler';
import { GetWeaponListHandler } from './application/GetWeaponList/GetWeaponList.handler';

const commandHandlers = [
  CreateWeaponHandler,
  GetWeaponHandler,
  UpdateWeaponHandler,
  DeleteWeaponHandler,
  GetWeaponListHandler,
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([WeaponEntity])],
  controllers: [WeaponsController],
  providers: [...commandHandlers, ...weaponProviders],
})
export class WeaponsModule {}
