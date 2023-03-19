import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsUUID } from 'class-validator';

export class AddCraftingMaterialsRequest {
  @ApiProperty()
  @IsArray()
  @Type(() => CraftingMaterial)
  craftingMaterialList: [];
}

export class CraftingMaterial {
  @ApiProperty()
  @IsInt()
  quantity: number;

  @ApiProperty()
  @IsUUID()
  materialId: string;
}
