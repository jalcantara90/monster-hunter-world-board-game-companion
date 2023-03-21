import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateMonsterRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  difficulty?: number;
}
