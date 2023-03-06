import { IsString, MinLength } from "class-validator";

export class CreateBrigadeRequest {
  @IsString()
  @MinLength(3)
  name: string;
}
