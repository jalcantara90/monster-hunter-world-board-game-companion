import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsUUID } from 'class-validator';

export class CreateCraftingMaterialRequest {
  @ApiProperty()
  @IsInt()
  quantity: number;

  @ApiProperty()
  @IsUUID()
  materialId: string;
}
