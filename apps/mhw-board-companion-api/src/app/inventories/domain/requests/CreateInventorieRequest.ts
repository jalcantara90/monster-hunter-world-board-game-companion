import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreateInventoryRequest {
  @ApiProperty()
  @IsUUID()
  campaignId: string;

  @ApiProperty()
  @IsUUID()
  hunterId: string;
}
