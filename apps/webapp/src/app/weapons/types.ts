import { CraftingBranch, WeaponType } from "@mhwboard-companion/common-api";

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
