import { ApiProperty } from '@nestjs/swagger';
import { ArmorPiece } from '../enum/ArmorPiece';
import { CraftingBranch } from '../enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';

export class GetArmorQuery {
  @ApiProperty()
  name: string;

  @ApiProperty()
  defense: number;

  @ApiProperty()
  elementalDefenseType: Element;

  @ApiProperty()
  elementalDefense: number;
  @ApiProperty()
  armorPiece: ArmorPiece;

  @ApiProperty()
  branch: CraftingBranch;

  @ApiProperty()
  monster: string;
}
