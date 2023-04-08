import { MonsterResponse } from '../../../monsters/domain/responses/MonsterResponse';
import { MonsterEntity } from '../../../monsters/infrastructure/entity/Monster.entity';
import { MonsterMapper } from '../../../monsters/infrastructure/repository/MonsterMapper';
import { WeaponEntity } from '../../infrastructure/entity/Weapon.entity';
import { CraftingBranch } from '../enum/CraftingBranch';
import { WeaponType } from '../enum/WeaponType';

export class WeaponResponse {
  public readonly monster: string | MonsterResponse;
  public readonly previousWeapon: string | WeaponResponse;
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly branch: CraftingBranch,
    public readonly weaponType: WeaponType,
    previousWeapon: string | WeaponEntity,
    public readonly defense: number,
    public readonly damageOne: number,
    public readonly damageTwo: number,
    public readonly damageThree: number,
    public readonly damageFour: number,
    public readonly damageFive: number,
    monster: string | MonsterEntity
  ) {

    if (previousWeapon && typeof previousWeapon === 'object') {
      this.previousWeapon = new WeaponResponse(
        previousWeapon.id,
        previousWeapon.name,
        previousWeapon.branch,
        previousWeapon.weaponType,
        previousWeapon.previousWeapon,
        previousWeapon.defense,
        previousWeapon.damageOne,
        previousWeapon.damageTwo,
        previousWeapon.damageThree,
        previousWeapon.damageFour,
        previousWeapon.damageFive,
        previousWeapon.monster
      );
    } else {
      this.previousWeapon = previousWeapon;
    }

    if (!monster) {
      return;
    }

    if (typeof monster === 'object') {
      const monsterMapper = new MonsterMapper();
      this.monster = monsterMapper.fromEntity(monster);
      return;
    }

    this.monster = monster;
  }
}
