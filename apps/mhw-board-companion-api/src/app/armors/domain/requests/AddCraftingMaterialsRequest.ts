import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsUUID } from 'class-validator';

export class CraftingMaterial {
  @ApiProperty()
  @IsInt()
  quantity: number;

  @ApiProperty()
  @IsUUID()
  materialId: string;
}

export class AddCraftingMaterialsRequest {
  @ApiProperty({ type: [CraftingMaterial]})
  @IsArray()
  @Type(() => CraftingMaterial)
  craftingMaterialList: [];
}

