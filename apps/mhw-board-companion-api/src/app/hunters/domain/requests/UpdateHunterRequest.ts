import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsOptional } from 'class-validator';

export class UpdateHunterRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsOptional()
  name: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsOptional()
  palicoName: string;
}
