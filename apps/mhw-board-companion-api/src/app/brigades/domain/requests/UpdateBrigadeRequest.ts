import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class UpdateBrigadeRequest {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  name: string;
}
