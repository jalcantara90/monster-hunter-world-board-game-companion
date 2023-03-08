import { IsArray, MinLength } from "class-validator";

export class AddCampaignHuntersRequest {
  @IsArray()
  hunterIds: string[];
}
