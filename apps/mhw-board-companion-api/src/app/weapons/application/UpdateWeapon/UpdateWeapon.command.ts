import { CraftingBranch } from "../../domain/enum/CraftingBranch";
import { WeaponType } from "../../domain/enum/WeaponType";

export class UpdateWeaponCommand {
  constructor(
    public readonly id: string,
    public readonly name?: string,
    public readonly branch?: CraftingBranch,
    public readonly weaponType?: WeaponType,
    public readonly monster?: string,
    public readonly previousWeapon?: string,
    public readonly defense?: number,
    public readonly damageOne?: number,
    public readonly damageTwo?: number,
    public readonly damageThree?: number,
    public readonly damageFour?: number,
    public readonly damageFive?: number
  ) {}
}
