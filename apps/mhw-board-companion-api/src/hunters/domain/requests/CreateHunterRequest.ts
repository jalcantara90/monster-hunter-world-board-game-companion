import { IsString, MinLength } from "class-validator";

export class CreateHunterRequest {
  @IsString()
  @MinLength(3)
  name: string;

  @IsString()
  @MinLength(3)
  palicoName: string;
}
