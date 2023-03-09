import { Injectable } from '@nestjs/common';
import { MonsterEntity } from '../entity/Monster.entity';
import { MonsterResponse } from '../../domain/responses/MonsterResponse';

@Injectable()
export class MonsterMapper {
  fromEntity(monster: MonsterEntity): MonsterResponse {
    return new MonsterResponse(monster.id, monster.name, monster.difficulty);
  }

  fromEntities(monsterList: MonsterEntity[]): MonsterResponse[] {
    return monsterList.map((monster) => this.fromEntity(monster));
  }
}
