import { CreateCraftingMaterialRequest } from '../requests/CreateCraftingMaterialRequest';
import { CraftingMaterialResponse } from '../responses/CraftingMaterialResponse';

export interface ArmorCraftingRepository {
  find(armorId: string): Promise<CraftingMaterialResponse[]>;
  create(
    armorId: string,
    craftingMaterial: CreateCraftingMaterialRequest
  ): Promise<CraftingMaterialResponse>;
  delete(id: string): Promise<void>;
}

export const ARMOR_CRAFTING_REPOSITORY = 'ARMOR_CRAFTING_REPOSITORY';