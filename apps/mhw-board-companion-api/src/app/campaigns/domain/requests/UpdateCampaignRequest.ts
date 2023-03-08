import { IsString, MinLength } from 'class-validator';

export class UpdateCampaignRequest {
  @IsString()
  @MinLength(3)
  name: string;
}
