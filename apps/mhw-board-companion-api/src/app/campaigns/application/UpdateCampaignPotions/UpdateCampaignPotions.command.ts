export class UpdateCampaignPotionsCommand {
  constructor(
    public readonly campaignId: string,
    public readonly potions: number
  ) {}
}
