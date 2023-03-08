import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { HunterRepository, HUNTER_REPOSITORY } from '../../domain/repository/HuntersRepository';
import { GetCampaignHuntersCommand } from './GetCampaignHunters.command';

@CommandHandler(GetCampaignHuntersCommand)
export class GetCampaignHuntersHandler
  implements ICommandHandler<GetCampaignHuntersCommand>
{
  constructor(
    @Inject(HUNTER_REPOSITORY) private hunterRepository: HunterRepository
  ) {}

  async execute(command: GetCampaignHuntersCommand) {
    return this.hunterRepository.findCampaignHunters(command.campaignId);
  }
}
