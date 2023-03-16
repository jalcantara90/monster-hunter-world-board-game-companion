import { Type } from 'class-transformer';
import { IsArray, IsInt, IsUUID } from 'class-validator';

export class AddCraftingMaterialsRequest {
  @IsArray()
  @Type(() => CraftingMaterial)
  craftingMaterialList: [];
}

export class CraftingMaterial {
  @IsInt()
  quantity: number;

  @IsUUID()
  materialId: string;
}
