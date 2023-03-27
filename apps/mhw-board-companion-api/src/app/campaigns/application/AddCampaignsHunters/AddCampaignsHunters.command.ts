import { HuntersCampaign } from '../../domain/requests/AddCampaignHunters';

export class AddCampaignHuntersCommand {
  constructor(
    public readonly campaignId: string,
    public readonly huntersCampaign: HuntersCampaign[]
  ) {}
}
