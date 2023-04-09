import {
  WeaponType,
  ArmorPiece,
  Elemental,
  CraftingBranch,
} from '@mhwboard-companion/common-api';
import { Material } from '../materials/types';

export type Campaign = {
  id: string;
  name: string;
  brigadeId: string;
};

export type CreateCampaignRequest = Omit<Campaign, 'id'>;
export type UpdateCampaignRequest = Campaign;

export type CampaignHunters = {
  id: string;
  weaponType: WeaponType;
  hunter: Hunter;
};

export type Hunter = {
  id: string;
  name: string;
  palicoName: string;
};

export type HunterCampaignRequest = {
  hunterId: string;
  weaponType: WeaponType;
};

export type AddHunterCampaignRequest = {
  campaignId: string;
  huntersCampaign: HunterCampaignRequest[];
};

export type Armor = {
  id: string;
  name: string;
  defense: number;
  armorPiece: ArmorPiece;
  branch: CraftingBranch;
  elementalDefenseType: Elemental;
  elementalDefense: number;
};

export type Weapon = {
  id: string;
  name: string;
  branch: CraftingBranch;
  weaponType: WeaponType;
  previousWeapon?: Weapon;
  defense: number;
  damageOne: number;
  damageTwo: number;
  damageThree: number;
  damageFour: number;
  damageFive: number;
};

export type InventoryMaterial = Material & { quantity: number };

export type InventoryHunter = {
  inventoryId: string;
  weaponType: WeaponType;
  commonMaterials: InventoryMaterial[];
  otherMaterials: InventoryMaterial[];
  weapons: Weapon[];
  armors: Armor[];
};
