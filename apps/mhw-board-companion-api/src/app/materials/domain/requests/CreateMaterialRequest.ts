import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsString, MinLength } from 'class-validator';
import { MaterialType } from '../enums/MaterialType';

export class CreateMaterialRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty()
  @IsBoolean()
  isCommon: boolean;

  @ApiProperty()
  @IsNumber()
  rarity: number;

  @ApiProperty({ enum: MaterialType })
  @IsEnum(MaterialType)
  type: MaterialType;
}
