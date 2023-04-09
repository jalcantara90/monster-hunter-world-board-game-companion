import {
  ArmorPiece,
  CraftingBranch,
  Elemental,
} from '@mhwboard-companion/common-api';

export type Armor = {
  id: string;
  name: string;
  branch: CraftingBranch;
  defense: number;
  armorPiece: ArmorPiece;
  elementalDefenseType: Elemental;
  elementalDefense: number;
  monster: string;
};
