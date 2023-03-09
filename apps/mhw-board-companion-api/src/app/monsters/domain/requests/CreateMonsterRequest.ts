import { IsInt, IsString, MinLength } from 'class-validator';

export class CreateMonsterRequest {
  @IsString()
  @MinLength(3)
  name: string;

  @IsInt()
  difficulty: number;
}
