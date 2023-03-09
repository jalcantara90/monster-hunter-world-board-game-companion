import { ArmorPiece } from '../../domain/enum/ArmorPiece';
import { CrafingBranch } from '../../domain/enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';

export class UpdateArmorCommand {
  constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly defense?: number,
    public readonly armorPiece?: ArmorPiece,
    public readonly branch?: CrafingBranch,
    public readonly monster?: string,
    public readonly elementalDefenseType?: Element,
    public readonly elementalDefense?: number
  ) {}
}
