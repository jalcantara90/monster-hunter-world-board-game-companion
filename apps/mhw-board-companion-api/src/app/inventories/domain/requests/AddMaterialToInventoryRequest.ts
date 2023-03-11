import { IsInt, IsUUID } from 'class-validator';

export class AddMaterialToInventoryRequest {
  @IsUUID()
  materialId: string;

  @IsInt()
  quantity: number;
}
