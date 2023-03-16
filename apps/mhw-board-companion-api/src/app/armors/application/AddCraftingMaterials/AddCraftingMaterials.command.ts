import { CraftingMaterial } from '../../domain/requests/AddCraftingMaterialsRequest';

export class AddCraftingMaterialsCommand {
  constructor(
    public armorId: string,
    public craftingMaterials: CraftingMaterial[]
  ) {}
}
