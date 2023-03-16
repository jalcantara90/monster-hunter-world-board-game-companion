import { IsInt, IsUUID } from 'class-validator';

export class CreateCraftingMaterialRequest {
  @IsInt()
  quantity: number;

  @IsUUID()
  materialId: string;
}
