import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  InventoryRepository,
  INVENTORY_REPOSITORY,
} from '../../../inventories/domain/repository/InventoryRepository';
import {
  CampaignHuntersRepository,
  CAMPAIGN_HUNTERS_REPOSITORY,
} from '../../domain/repository/CampaignHuntersRepository';


import { AddCampaignHuntersCommand } from './AddCampaignsHunters.command';

const MAX_CAMPAIGN_HUNTERS = 4;

@CommandHandler(AddCampaignHuntersCommand)
export class AddCampaigHuntersHandler
  implements ICommandHandler<AddCampaignHuntersCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventoryRepository: InventoryRepository,
    @Inject(CAMPAIGN_HUNTERS_REPOSITORY)
    private campaignHuntersRepository: CampaignHuntersRepository
  ) {}

  async execute(command: AddCampaignHuntersCommand) {
    const campaignHunters = await this.campaignHuntersRepository.getAllHunters(
      command.campaignId
    );

    if (
      campaignHunters.length + command.huntersCampaign.length >=
      MAX_CAMPAIGN_HUNTERS
    ) {
      throw new Error('Campaign not allow more hunters');
    }

    await Promise.all(
      command.huntersCampaign.map((hunterCampaign) =>
        this.campaignHuntersRepository.create(
          hunterCampaign.hunterId,
          command.campaignId,
          hunterCampaign.weaponType
        )
      )
    );

    await Promise.all(
      command.huntersCampaign.map((hunter) =>
        this.inventoryRepository.create({
          campaignId: command.campaignId,
          hunterId: hunter.hunterId,
        })
      )
    );
  }
}
