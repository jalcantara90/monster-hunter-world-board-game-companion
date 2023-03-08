import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { UpdateCampaignCommand } from './UpdateCampaign.command';
import {
  CAMPAIGN_REPOSITORY,
  CampaignRepository,
} from '../../domain/repository/CampaignRepository';

@CommandHandler(UpdateCampaignCommand)
export class UpdateCampaignHandler
  implements ICommandHandler<UpdateCampaignCommand>
{
  constructor(
    @Inject(CAMPAIGN_REPOSITORY) private campaignRepository: CampaignRepository
  ) {}

  async execute(command: UpdateCampaignCommand) {
    return this.campaignRepository.update(command.id, { name: command.name });
  }
}
