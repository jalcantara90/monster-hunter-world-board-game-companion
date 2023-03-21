import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class UpdateInventoryMaterialRequest {
  @ApiProperty()
  @IsInt()
  quantity: number;
}
