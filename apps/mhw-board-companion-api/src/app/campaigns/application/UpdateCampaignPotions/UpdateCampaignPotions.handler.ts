import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import {
  CAMPAIGN_REPOSITORY,
  CampaignRepository,
} from '../../domain/repository/CampaignRepository';
import { UpdateCampaignPotionsCommand } from './UpdateCampaignPotions.command';
import { CampaignMapper } from '../../infrastructure/repository/CampaignMapper';

@CommandHandler(UpdateCampaignPotionsCommand)
export class UpdateCampaignPotionsHandler
  implements ICommandHandler<UpdateCampaignPotionsCommand>
{
  constructor(
    @Inject(CAMPAIGN_REPOSITORY) private campaignRepository: CampaignRepository,
    private campaignMapper: CampaignMapper
  ) {}

  async execute(command: UpdateCampaignPotionsCommand) {
    const campaing = await this.campaignRepository.updatePotions(
      command.campaignId,
      command.potions
    );

    return this.campaignMapper.fromEntity(campaing);
  }
}
