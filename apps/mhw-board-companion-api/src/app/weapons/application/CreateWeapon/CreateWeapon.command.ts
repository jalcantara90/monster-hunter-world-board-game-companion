import { CraftingBranch } from "../../domain/enum/CraftingBranch";
import { WeaponType } from "../../domain/enum/WeaponType";

export class CreateWeaponCommand {
  constructor(
    public readonly name: string,
    public readonly branch: CraftingBranch,
    public readonly weaponType: WeaponType,
    public readonly monster: string,
    public readonly previousWeapon: string = null,
    public readonly defense: number = 0,
    public readonly damageOne: number = 0,
    public readonly damageTwo: number = 0,
    public readonly damageThree: number = 0,
    public readonly damageFour: number = 0,
    public readonly damageFive: number = 0
  ) {}
}
