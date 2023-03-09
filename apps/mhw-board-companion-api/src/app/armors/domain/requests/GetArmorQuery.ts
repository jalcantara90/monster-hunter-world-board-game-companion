import { ArmorPiece } from '../enum/ArmorPiece';
import { CrafingBranch } from '../enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';

export interface GetArmorQuery {
  name: string;
  defense: number;
  elementalDefenseType: Element;
  elementalDefense: number;
  armorPiece: ArmorPiece;
  branch: CrafingBranch;
  monster: string;
}
