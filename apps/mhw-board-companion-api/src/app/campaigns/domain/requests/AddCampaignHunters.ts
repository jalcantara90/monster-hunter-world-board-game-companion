import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class AddCampaignHuntersRequest {
  @ApiProperty()
  @IsArray()
  hunterIds: string[];
}
