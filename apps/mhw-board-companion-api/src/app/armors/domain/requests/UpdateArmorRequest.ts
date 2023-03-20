import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { ArmorPiece } from '../enum/ArmorPiece';
import { CraftingBranch } from '../enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';

export class UpdateArmorRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  defense: number;

  @ApiProperty()
  @IsEnum(Element)
  @IsOptional()
  elementalDefenseType: Element;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  elementalDefense: number;

  @ApiProperty()
  @IsEnum(ArmorPiece)
  @IsOptional()
  armorPiece: ArmorPiece;

  @ApiProperty()
  @IsEnum(CraftingBranch)
  @IsOptional()
  branch: CraftingBranch;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  monster: string;
}
