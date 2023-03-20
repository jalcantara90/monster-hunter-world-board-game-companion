import { CreateCraftingMaterialRequest } from "../requests/CreateCraftingMaterialRequest";
import { WeaponCraftingMaterialResponse } from "../responses/WeaponCraftingMaterialResponse";

export interface WeaponCraftingRepository {
  find(armorId: string): Promise<WeaponCraftingMaterialResponse[]>;
  create(
    armorId: string,
    craftingMaterial: CreateCraftingMaterialRequest
  ): Promise<WeaponCraftingMaterialResponse>;
  delete(id: string): Promise<void>;
}

export const WEAPON_CRAFTING_REPOSITORY = 'WEAPON_CRAFTING_REPOSITORY';
