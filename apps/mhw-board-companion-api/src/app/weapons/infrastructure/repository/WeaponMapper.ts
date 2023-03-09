import { Injectable } from '@nestjs/common';
import { WeaponEntity } from '../entity/Weapon.entity';
import { WeaponResponse } from '../../domain/responses/WeaponResponse';

@Injectable()
export class WeaponMapper {
  fromEntity(weapon: WeaponEntity): WeaponResponse {
    return new WeaponResponse(
      weapon.id,
      weapon.name,
      weapon.branch,
      weapon.weaponType,
      weapon.defense,
      weapon.damageOne,
      weapon.damageTwo,
      weapon.damageThree,
      weapon.damageFour,
      weapon.damageFive,
      weapon.monster
    );
  }

  fromEntities(weaponList: WeaponEntity[]): WeaponResponse[] {
    return weaponList.map((weapon) => this.fromEntity(weapon));
  }
}
