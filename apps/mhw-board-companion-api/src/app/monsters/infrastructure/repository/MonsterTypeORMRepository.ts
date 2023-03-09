import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { MonsterMapper } from './MonsterMapper';
import { MonsterEntity } from '../entity/Monster.entity';
import { MonsterRepository } from '../../domain/repository/MonsterRepository';
import { MonsterResponse } from '../../domain/responses/MonsterResponse';
import { CreateMonsterRequest } from '../../domain/requests/CreateMonsterRequest';
import { UpdateMonsterRequest } from '../../domain/requests/UpdateMonsterRequest';
import { GetMonsterQuery } from '../../domain/requests/GetMonsterQuery';

@Injectable()
export class MonsterTypeORMRepository implements MonsterRepository {
  constructor(
    @InjectRepository(MonsterEntity)
    private monsterRepository: Repository<MonsterEntity>,
    private monsterMapper: MonsterMapper
  ) {}

  async findAll(query?: GetMonsterQuery): Promise<MonsterResponse[]> {
    const monsterEntities = await this.monsterRepository.findBy(query);
    return this.monsterMapper.fromEntities(monsterEntities);
  }

  async find(id: string): Promise<MonsterResponse> {
    const monsterEntity = await this.monsterRepository.findOneBy({
      id,
      isActive: true,
    });

    if (!monsterEntity) {
      throw new NotFoundException(`Monster with id ${id} not exist`);
    }

    return this.monsterMapper.fromEntity(monsterEntity);
  }

  async create(monster: CreateMonsterRequest): Promise<MonsterResponse> {
    const newMonster = this.monsterRepository.create(monster);
    const monsterEntity = await this.monsterRepository.save(newMonster);

    return this.monsterMapper.fromEntity(monsterEntity);
  }

  async update(
    id: string,
    monster: UpdateMonsterRequest
  ): Promise<MonsterResponse> {
    await this.monsterRepository.update(id, { name: monster.name });
    const monsterEntity = await this.monsterRepository.findOneBy({
      id,
      isActive: true,
    });

    return this.monsterMapper.fromEntity(monsterEntity);
  }

  async delete(id: string): Promise<void> {
    const monsterEntity = await this.monsterRepository.findOneBy({
      id,
    });

    if (!monsterEntity) {
      throw new NotFoundException(`Monster with id ${id} not exist`);
    }

    await this.monsterRepository.update(id, { isActive: false });
  }
}
