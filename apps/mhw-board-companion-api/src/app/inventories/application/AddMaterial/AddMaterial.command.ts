export class AddMaterialCommand {
  constructor(
    public readonly inventoryId: string,
    public readonly materialId: string,
    public readonly quantity: number
  ) {}
}
