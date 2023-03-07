import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { HunterMapper } from './HunterMapper';
import { HunterEntity } from '../../domain/entities/Hunter.entity';
import { HunterResponse } from '../../domain/responses/HunterResponse';
import { HunterRepository } from '../../domain/repository/HuntersRepository';
import { CreateHunterRequest } from '../../domain/requests/CreateHunterRequest';

@Injectable()
export class HunterTypeORMRepository implements HunterRepository {
  constructor(
    @InjectRepository(HunterEntity)
    private hunterRepository: Repository<HunterEntity>,
    private hunterMapper: HunterMapper
  ) {}

  async create(hunter: CreateHunterRequest): Promise<HunterResponse> {
    const newHunter = this.hunterRepository.create(hunter);
    const hunterEntity = await this.hunterRepository.save(newHunter);
    return this.hunterMapper.fromEntity(hunterEntity);
  }
}
