import { IsUUID } from 'class-validator';

export class CreateInventoryRequest {
  @IsUUID()
  campaignId: string;

  @IsUUID()
  hunterId: string;
}
