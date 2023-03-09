import { ArmorPiece } from "../enum/ArmorPiece";
import { Element } from '../../../database/enums/ElementType';
import { CrafingBranch } from "../enum/CraftingBranch";
import { MonsterEntity } from "../../../monsters/infrastructure/entity/Monster.entity";
import { MonsterResponse } from "../../../monsters/domain/responses/MonsterResponse";
import { MonsterMapper } from "../../../monsters/infrastructure/repository/MonsterMapper";

export class ArmorResponse {
  public readonly monster: string | MonsterResponse;
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly defense: number,
    public readonly armorPiece: ArmorPiece,
    public readonly branch: CrafingBranch,
    public readonly elementalDefenseType: Element,
    public readonly elementalDefense: number,
    monster: string | MonsterEntity,
  ) {
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
