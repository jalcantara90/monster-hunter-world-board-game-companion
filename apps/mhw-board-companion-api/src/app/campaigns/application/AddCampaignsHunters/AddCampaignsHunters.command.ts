export class AddCampaignHuntersCommand {
  constructor(
    public readonly campaignId: string,
    public readonly huntersIds: string[]
  ) {}
}
