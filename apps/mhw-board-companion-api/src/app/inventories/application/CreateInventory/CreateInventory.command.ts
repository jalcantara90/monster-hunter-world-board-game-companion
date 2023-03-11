export class CreateInventoryCommand {
  constructor(
    public readonly campaignId: string,
    public readonly hunterId: string
  ) {}
}
