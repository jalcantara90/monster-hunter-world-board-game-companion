import { IsString, MinLength } from 'class-validator';

export class UpdateBrigadeRequest {
  @IsString()
  @MinLength(3)
  name: string;
}
