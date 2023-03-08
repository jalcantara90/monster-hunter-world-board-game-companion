import { IsString, MinLength } from 'class-validator';

export class UpdateMaterialRequest {
  @IsString()
  @MinLength(3)
  name: string;
}
