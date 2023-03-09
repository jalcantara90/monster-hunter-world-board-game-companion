import { IsBoolean, IsEnum, IsNumber, IsString, MinLength } from 'class-validator';
import { MaterialType } from '../enums/MaterialType';

export class CreateMaterialRequest {
  @IsString()
  @MinLength(3)
  name: string;

  @IsBoolean()
  isCommon: boolean;

  @IsNumber()
  rarity: number;

  @IsEnum(MaterialType)
  type: MaterialType;
}
