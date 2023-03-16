import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { armorProviders } from './armors.providers';
import {
  ArmorCraftingEntity,
  ArmorEntity,
} from './infrastructure/entity/Armor.entity';
import { ArmorsController } from './infrastructure/controller/armors.controller';
import { CreateArmorHandler } from './application/CreateArmor/CreateArmor.handler';
import { GetArmorHandler } from './application/GetArmor/GetArmor.handler';
import { DeleteArmorHandler } from './application/DeleteArmor/DeleteArmor.handler';
import { UpdateArmorHandler } from './application/UpdateArmor/UpdateArmor.handler';
import { GetArmorListHandler } from './application/GetArmorList/GetArmorList.handler';
import { AddCraftingMaterialHandler } from './application/AddCraftingMaterials/AddCraftingMaterials.handler';
import { GetCraftingMaterialArmorHandler } from './application/GetCraftingMaterials/GetCraftingMaterials.handler';

const commandHandlers = [
  CreateArmorHandler,
  GetArmorHandler,
  UpdateArmorHandler,
  DeleteArmorHandler,
  GetArmorListHandler,
  AddCraftingMaterialHandler,
  GetCraftingMaterialArmorHandler
];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([ArmorEntity, ArmorCraftingEntity]),
  ],
  controllers: [ArmorsController],
  providers: [...commandHandlers, ...armorProviders],
})
export class ArmorsModule {}
