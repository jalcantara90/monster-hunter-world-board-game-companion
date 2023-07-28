import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsUUID, Max, Min } from 'class-validator';

export class UpdateCampaignPotionsRequest {
  @ApiProperty()
  @IsUUID()
  campaignId: string;

  @ApiProperty()
  @IsInt()
  @Max(3)
  @Min(0)
  potions: number;
}
