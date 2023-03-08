import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { DeleteCampaignCommand } from './DeleteCampaign.command';
import {
  CAMPAIGN_REPOSITORY,
  CampaignRepository,
} from '../../domain/repository/CampaignRepository';

@CommandHandler(DeleteCampaignCommand)
export class DeleteCampaignHandler
  implements ICommandHandler<DeleteCampaignCommand>
{
  constructor(
    @Inject(CAMPAIGN_REPOSITORY) private campaignRepository: CampaignRepository
  ) {}

  async execute(command: DeleteCampaignCommand) {
    await this.campaignRepository.delete(command.id);
  }
}
