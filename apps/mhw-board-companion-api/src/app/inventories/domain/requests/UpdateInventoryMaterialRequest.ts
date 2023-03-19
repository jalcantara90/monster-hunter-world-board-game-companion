import { IsInt } from 'class-validator';

export class UpdateInventoryMaterialRequest {
  @IsInt()
  quantity: number;
}
