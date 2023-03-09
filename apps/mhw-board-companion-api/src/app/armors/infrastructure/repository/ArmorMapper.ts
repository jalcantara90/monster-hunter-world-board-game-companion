import { Injectable } from '@nestjs/common';
import { ArmorEntity } from '../entity/Armor.entity';
import { ArmorResponse } from '../../domain/responses/ArmorResponse';

@Injectable()
export class ArmorMapper {
  fromEntity(armor: ArmorEntity): ArmorResponse {
    return new ArmorResponse(
      armor.id,
      armor.name,
      armor.defense,
      armor.armorPiece,
      armor.branch,
      armor.elementalDefenseType,
      armor.elementalDefense,
      armor.monster
    );
  }

  fromEntities(armorList: ArmorEntity[]): ArmorResponse[] {
    return armorList.map((armor) => this.fromEntity(armor));
  }
}
