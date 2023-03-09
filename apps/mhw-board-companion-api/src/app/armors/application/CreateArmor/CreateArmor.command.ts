import { Element } from '../../../database/enums/ElementType';
import { ArmorPiece } from '../../domain/enum/ArmorPiece';
import { CrafingBranch } from '../../domain/enum/CraftingBranch';

export class CreateArmorCommand {
  constructor(
    public readonly name: string,
    public readonly defense: number,
    public readonly armorPiece: ArmorPiece,
    public readonly branch: CrafingBranch,
    public readonly monster: string = null,
    public readonly elementalDefenseType: Element = Element.NONELEMENTAL,
    public readonly elementalDefense: number = 0,
  ) {}
}
