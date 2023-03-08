export class CreateCampaignCommand {
  constructor(public readonly name: string, public readonly brigadeId: string) {}
}
