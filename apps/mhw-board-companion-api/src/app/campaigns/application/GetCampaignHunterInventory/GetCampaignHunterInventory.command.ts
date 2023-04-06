export class GetCampaignHunterInventoryCommand {
  constructor(
    public readonly campaignId: string,
    public readonly hunterId: string
  ) {}
}
