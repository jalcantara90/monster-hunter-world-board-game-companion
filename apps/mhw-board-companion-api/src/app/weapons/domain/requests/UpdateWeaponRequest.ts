import { IsEnum, IsInt, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { CraftingBranch } from '../enum/CraftingBranch';
import { WeaponType } from '../enum/WeaponType';

export class UpdateWeaponRequest {
  @IsString()
  @MinLength(3)
  @IsOptional()
  name: string;

  @IsEnum(WeaponType)
  @IsOptional()
  weaponType: WeaponType;

  @IsEnum(CraftingBranch)
  @IsOptional()
  branch: CraftingBranch;

  @IsString()
  @IsOptional()
  monster: string;

  @IsInt()
  @IsOptional()
  defense: number;

  @IsInt()
  @IsOptional()
  damageOne: number;

  @IsInt()
  @IsOptional()
  damageTwo: number;

  @IsInt()
  @IsOptional()
  damageThree: number;

  @IsInt()
  @IsOptional()
  damageFour: number;

  @IsInt()
  @IsOptional()
  damageFive: number;

  @IsUUID()
  @IsOptional()
  previousWeaponId: string;
}
