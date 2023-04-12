import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { campaignProviders } from './campaigns.providers';
import {
  CampaignEntity,
  CampaignHuntersEntity,
} from './infrastructure/entity/Campaign.entity';
import { CampaignsController } from './infrastructure/controller/campaigns.controller';

import { CreateCampaignHandler } from './application/CreateCampaign/CreateCampaign.handler';
import { GetCampaignHandler } from './application/GetCampaign/GetCampaign.handler';
import { DeleteCampaignHandler } from './application/DeleteCampaign/DeleteCampaign.handler';
import { UpdateCampaignHandler } from './application/UpdateCampaign/UpdateCampaign.handler';
import { GetCampaignListByBrigadeIdHandler } from './application/GetCampaignListByBrigadeId/GetCampaignListByBrigadeId.handler';
import { AddCampaigHuntersHandler } from './application/AddCampaignsHunters/AddCampaignsHunters.handler';

import { BrigadeEntity } from '../brigades/infrastructure/entity/Brigade.entity';

import { hunterProviders } from '../hunters/hunters.providers';
import { HunterEntity } from '../hunters/infrastructure/entity/Hunter.entity';
import { inventoryProviders } from '../inventories/inventories.providers';
import { InventoryEntity, InventoryItemsEntity } from '../inventories/infrastructure/entity/Inventory.entity';
import { GetCampaignListByBrigadeIdCommandHandler } from './application/GetCampaignHunterInventory/GetCampaignHunterInventory.handler';
import { materialProviders } from '../materials/materials.providers';
import { armorProviders } from '../armors/armors.providers';
import { weaponProviders } from '../weapons/weapons.providers';
import { MaterialEntity } from '../materials/infrastructure/entity/Material.entity';
import {
  ArmorCraftingEntity,
  ArmorEntity,
} from '../armors/infrastructure/entity/Armor.entity';
import {
  WeaponCraftingEntity,
  WeaponEntity,
} from '../weapons/infrastructure/entity/Weapon.entity';

const commandHandlers = [
  CreateCampaignHandler,
  GetCampaignHandler,
  UpdateCampaignHandler,
  DeleteCampaignHandler,
  GetCampaignListByBrigadeIdHandler,
  AddCampaigHuntersHandler,
  GetCampaignListByBrigadeIdCommandHandler,
];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([
      CampaignEntity,
      BrigadeEntity,
      HunterEntity,
      CampaignHuntersEntity,
      InventoryEntity,
      InventoryItemsEntity,
      MaterialEntity,
      ArmorEntity,
      WeaponEntity,
      WeaponCraftingEntity,
      ArmorCraftingEntity,
    ]),
  ],
  controllers: [CampaignsController],
  providers: [
    ...commandHandlers,
    ...campaignProviders,
    ...hunterProviders,
    ...inventoryProviders,
    ...materialProviders,
    ...armorProviders,
    ...weaponProviders,
  ],
})
export class CampaignsModule {}
