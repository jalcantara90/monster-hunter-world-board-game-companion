import { IsEnum, IsInt, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { ArmorPiece } from '../enum/ArmorPiece';
import { CrafingBranch } from '../enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';

export class UpdateArmorRequest {
  @IsString()
  @MinLength(3)
  @IsOptional()
  name: string;

  @IsInt()
  @IsOptional()
  defense: number;

  @IsEnum(Element)
  @IsOptional()
  elementalDefenseType: Element;

  @IsInt()
  @IsOptional()
  elementalDefense: number;

  @IsEnum(ArmorPiece)
  @IsOptional()
  armorPiece: ArmorPiece;

  @IsEnum(CrafingBranch)
  @IsOptional()
  branch: CrafingBranch;

  @IsUUID()
  @IsOptional()
  monster: string;
}
