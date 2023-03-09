import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { armorProviders } from './armors.providers';
import { ArmorEntity } from './infrastructure/entity/Armor.entity';
import { ArmorsController } from './infrastructure/controller/armors.controller';
import { CreateArmorHandler } from './application/CreateArmor/CreateArmor.handler';
import { GetArmorHandler } from './application/GetArmor/GetArmor.handler';
import { DeleteArmorHandler } from './application/DeleteArmor/DeleteArmor.handler';
import { UpdateArmorHandler } from './application/UpdateArmor/UpdateArmor.handler';
import { GetArmorListHandler } from './application/GetArmorList/GetArmorList.handler';

const commandHandlers = [
  CreateArmorHandler,
  GetArmorHandler,
  UpdateArmorHandler,
  DeleteArmorHandler,
  GetArmorListHandler
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([ArmorEntity])],
  controllers: [ArmorsController],
  providers: [...commandHandlers, ...armorProviders],
})
export class ArmorsModule {}
