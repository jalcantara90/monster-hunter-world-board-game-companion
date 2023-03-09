import { CreateMonsterRequest } from '../requests/CreateMonsterRequest';
import { GetMonsterQuery } from '../requests/GetMonsterQuery';
import { UpdateMonsterRequest } from '../requests/UpdateMonsterRequest';
import { MonsterResponse } from '../responses/MonsterResponse';

export interface MonsterRepository {
  find(id: string): Promise<MonsterResponse>;
  findAll(query?: GetMonsterQuery): Promise<MonsterResponse[]>;
  create(monster: CreateMonsterRequest): Promise<MonsterResponse>;
  update(id: string, monster: UpdateMonsterRequest): Promise<MonsterResponse>;
  delete(id: string): Promise<void>;
}

export const MONSTER_REPOSITORY = 'MONSTER_REPOSITORY';
