import {
  WeaponType,
  ArmorPiece,
  Elemental,
  CraftingBranch,
} from '@mhwboard-companion/common-api';
import { Material } from '../materials/types';
import { Hunter } from '../hunters/types';

export type Campaign = {
  id: string;
  name: string;
  brigadeId: string;
  potions: number;
};

export type CreateCampaignRequest = Omit<Campaign, 'id' | 'potions'>;
export type UpdateCampaignRequest = Campaign;

export type CampaignHunters = {
  id: string;
  weaponType: WeaponType;
  hunter: Hunter;
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
