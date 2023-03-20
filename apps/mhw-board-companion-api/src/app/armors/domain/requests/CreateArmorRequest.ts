import { IsEnum, IsInt, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { ArmorPiece } from '../enum/ArmorPiece';
import { CraftingBranch } from '../enum/CraftingBranch';
import { Element } from '../../../database/enums/ElementType';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArmorRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsInt()
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
  armorPiece: ArmorPiece;

  @ApiProperty()
  @IsEnum(CraftingBranch)
  branch: CraftingBranch;

  @ApiProperty()
  @IsUUID()
  @IsOptional()
  monster: string;
}
