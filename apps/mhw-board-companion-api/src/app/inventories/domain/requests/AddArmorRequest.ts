import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class AddArmorRequest {
  @ApiProperty()
  @IsUUID()
  armorId: string;
}
