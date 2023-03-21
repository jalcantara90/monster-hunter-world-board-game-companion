import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsUUID } from 'class-validator';

export class AddMaterialToInventoryRequest {
  @ApiProperty()
  @IsUUID()
  materialId: string;

  @ApiProperty()
  @IsInt()
  quantity: number;
}
