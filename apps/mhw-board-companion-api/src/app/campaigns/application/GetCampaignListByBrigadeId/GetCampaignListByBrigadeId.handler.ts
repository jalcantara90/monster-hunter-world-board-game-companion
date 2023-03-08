import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CAMPAIGN_REPOSITORY,
  CampaignRepository,
} from '../../domain/repository/CampaignRepository';
import { GetCampaignListByBrigadeIdCommand } from './GetCampaignListByBrigadeId.command';


@CommandHandler(GetCampaignListByBrigadeIdCommand)
export class GetCampaignListByBrigadeIdHandler implements ICommandHandler<GetCampaignListByBrigadeIdCommand> {
  constructor(
    @Inject(CAMPAIGN_REPOSITORY) private campaignRepository: CampaignRepository
  ) {}

  execute(command: GetCampaignListByBrigadeIdCommand) {
    return this.campaignRepository.findAllByBrigadeId(command.brigadeId);
  }
}
