import { IsString, IsUUID, MinLength } from 'class-validator';

export class CreateCampaignRequest {
  @IsString()
  @MinLength(3)
  name: string;

  @IsUUID()
  brigadeId: string;
}
