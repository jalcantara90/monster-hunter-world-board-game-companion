import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CAMPAIGN_REPOSITORY,
  CampaignRepository,
} from '../../domain/repository/CampaignRepository';
import { GetCampaignCommand } from './GetCampaign.command';

@CommandHandler(GetCampaignCommand)
export class GetCampaignHandler implements ICommandHandler<GetCampaignCommand> {
  constructor(
    @Inject(CAMPAIGN_REPOSITORY) private campaignRepository: CampaignRepository
  ) {}

  async execute(command: GetCampaignCommand) {
    return this.campaignRepository.find(command.id);
  }
}
