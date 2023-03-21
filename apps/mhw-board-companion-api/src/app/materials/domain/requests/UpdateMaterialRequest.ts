import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class UpdateMaterialRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  name: string;
}
