export class UpdateInventoryItemCommand {
  constructor(
    public readonly inventoryMaterialId: string,
    public readonly quantity: number
  ) {}
}
