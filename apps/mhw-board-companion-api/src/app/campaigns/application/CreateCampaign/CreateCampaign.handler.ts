import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { CreateCampaignCommand } from './CreateCampaign.command';
import {
  CampaignRepository,
  CAMPAIGN_REPOSITORY,
} from '../../domain/repository/CampaignRepository';

@CommandHandler(CreateCampaignCommand)
export class CreateCampaignHandler
  implements ICommandHandler<CreateCampaignCommand>
{
  constructor(
    @Inject(CAMPAIGN_REPOSITORY) private campaignRepository: CampaignRepository
  ) {}

  async execute(command: CreateCampaignCommand) {
    return this.campaignRepository.create(command);
  }
}
