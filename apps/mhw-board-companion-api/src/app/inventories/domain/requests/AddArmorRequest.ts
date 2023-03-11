import { IsUUID } from "class-validator";

export class AddArmorRequest {
  @IsUUID()
  armorId: string;
}
