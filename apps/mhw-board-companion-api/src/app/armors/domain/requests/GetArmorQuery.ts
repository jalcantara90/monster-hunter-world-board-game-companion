import { ArmorPiece } from '../enum/ArmorPiece';
import { CraftingBranch } from '../enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';

export interface GetArmorQuery {
  name: string;
  defense: number;
  elementalDefenseType: Element;
  elementalDefense: number;
  armorPiece: ArmorPiece;
  branch: CraftingBranch;
  monster: string;
}
