import { IsString, MinLength, IsOptional } from 'class-validator';

export class UpdateHunterRequest {
  @IsString()
  @MinLength(3)
  @IsOptional()
  name: string;

  @IsString()
  @MinLength(3)
  @IsOptional()
  palicoName: string;
}
