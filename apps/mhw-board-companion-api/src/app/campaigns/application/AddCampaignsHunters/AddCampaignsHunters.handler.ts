import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  HunterRepository,
  HUNTER_REPOSITORY,
} from '../../../hunters/domain/repository/HuntersRepository';
import { HunterEntity } from '../../../hunters/infrastructure/entity/Hunter.entity';

import {
  CAMPAIGN_REPOSITORY,
  CampaignRepository,
} from '../../domain/repository/CampaignRepository';
import { AddCampaignHuntersCommand } from './AddCampaignsHunters.command';

const MAX_CAMPAIGN_HUNTERS = 3;

@CommandHandler(AddCampaignHuntersCommand)
export class AddCampaigHuntersHandler
  implements ICommandHandler<AddCampaignHuntersCommand>
{
  constructor(
    @Inject(CAMPAIGN_REPOSITORY) private campaignRepository: CampaignRepository,
    @Inject(HUNTER_REPOSITORY) private huntersRepository: HunterRepository
  ) {}

  async execute(command: AddCampaignHuntersCommand) {
    const campaignHunters = await this.huntersRepository.findCampaignHunters(
      command.campaignId
    );

    if (campaignHunters.length > MAX_CAMPAIGN_HUNTERS) {
      throw new Error('Campaign not allow more hunters');
    }

    const newHunters = await this.huntersRepository.findAll({
      hunterIds: command.huntersIds,
      isApiResponse: false,
    }) as HunterEntity[];

    return this.campaignRepository.AddCampaignHunters(
      command.campaignId,
      newHunters
    );
  }
}
