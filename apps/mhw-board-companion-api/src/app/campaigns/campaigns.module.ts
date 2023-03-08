import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { campaignProviders } from './campaigns.providers';
import { CampaignEntity } from './infrastructure/entity/Campaign.entity';
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

const commandHandlers = [
  CreateCampaignHandler,
  GetCampaignHandler,
  UpdateCampaignHandler,
  DeleteCampaignHandler,
  GetCampaignListByBrigadeIdHandler,
  AddCampaigHuntersHandler
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([CampaignEntity, BrigadeEntity, HunterEntity])],
  controllers: [CampaignsController],
  providers: [...commandHandlers, ...campaignProviders, ...hunterProviders],
})
export class CampaignsModule {}
