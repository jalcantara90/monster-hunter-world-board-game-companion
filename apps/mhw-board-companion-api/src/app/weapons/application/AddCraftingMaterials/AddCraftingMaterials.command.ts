import { CraftingMaterial } from "../../domain/requests/AddWeaponCraftingMaterialsRequest";

export class AddWeaponCraftingMaterialsCommand {
  constructor(
    public weaponId: string,
    public craftingMaterials: CraftingMaterial[]
  ) {}
}
