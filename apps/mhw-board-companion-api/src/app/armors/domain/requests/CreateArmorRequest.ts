import { IsEnum, IsInt, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { ArmorPiece } from '../enum/ArmorPiece';
import { CrafingBranch } from '../enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';

export class CreateArmorRequest {
  @IsString()
  @MinLength(3)
  name: string;

  @IsInt()
  defense: number;

  @IsEnum(Element)
  @IsOptional()
  elementalDefenseType: Element;

  @IsInt()
  @IsOptional()
  elementalDefense: number;

  @IsEnum(ArmorPiece)
  armorPiece: ArmorPiece;

  @IsEnum(CrafingBranch)
  branch: CrafingBranch;

  @IsUUID()
  @IsOptional()
  monster: string;
}
