import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CampaignHuntersRepository,
  CAMPAIGN_HUNTERS_REPOSITORY,
} from '../../../campaigns/domain/repository/CampaignHuntersRepository';
import { GetCampaignHuntersCommand } from './GetCampaignHunters.command';

@CommandHandler(GetCampaignHuntersCommand)
export class GetCampaignHuntersHandler
  implements ICommandHandler<GetCampaignHuntersCommand>
{
  constructor(
    @Inject(CAMPAIGN_HUNTERS_REPOSITORY)
    private campaignHuntersRepository: CampaignHuntersRepository
  ) {}

  async execute(command: GetCampaignHuntersCommand) {
    return this.campaignHuntersRepository.getAllHunters(command.campaignId);
  }
}
