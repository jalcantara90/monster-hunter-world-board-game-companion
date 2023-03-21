import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class GetInventorieQuery {
  @ApiProperty()
  @IsString()
  @IsOptional()
  armorId?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  weaponId?: string;
}
