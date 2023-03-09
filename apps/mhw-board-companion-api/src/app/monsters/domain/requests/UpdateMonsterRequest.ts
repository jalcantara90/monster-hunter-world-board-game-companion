import { IsInt, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateMonsterRequest {
  @IsString()
  @MinLength(3)
  @IsOptional()
  name?: string;

  @IsInt()
  @IsOptional()
  difficulty?: number;
}
