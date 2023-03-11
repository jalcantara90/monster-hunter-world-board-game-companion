import { IsUUID } from "class-validator";

export class AddWeaponRequest {
  @IsUUID()
  weaponId: string;
}
