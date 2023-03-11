import { IsString, MinLength } from 'class-validator';

export class UpdateInventorieRequest {
  @IsString()
  @MinLength(3)
  name: string;
}
