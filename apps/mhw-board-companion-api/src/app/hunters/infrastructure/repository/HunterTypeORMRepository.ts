import { Repository, In } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { HunterMapper } from './HunterMapper';
import { HunterEntity } from '../entity/Hunter.entity';
import { HunterResponse } from '../../domain/responses/HunterResponse';
import { HunterRepository } from '../../domain/repository/HuntersRepository';
import { CreateHunterRequest } from '../../domain/requests/CreateHunterRequest';
import { UpdateHunterRequest } from '../../domain/requests/UpdateHunterRequest';

@Injectable()
export class HunterTypeORMRepository implements HunterRepository {
  constructor(
    @InjectRepository(HunterEntity)
    private hunterRepository: Repository<HunterEntity>,
    private hunterMapper: HunterMapper
  ) {}

  async find(id: string): Promise<HunterResponse> {
    const hunterEntity = await this.hunterRepository.findOneBy({
      id,
      isActive: true,
    });

    if (!hunterEntity) {
      throw new NotFoundException(`Hunter with id ${id} not exist`);
    }

    return this.hunterMapper.fromEntity(hunterEntity);
  }

  findByUserId(userId: string): Promise<HunterEntity> {
    return this.hunterRepository.findOneBy({ userId });
  }

  async create(hunter: CreateHunterRequest): Promise<HunterResponse> {
    const newHunter = this.hunterRepository.create(hunter);
    const hunterEntity = await this.hunterRepository.save(newHunter);

    return this.hunterMapper.fromEntity(hunterEntity);
  }

  async update(
    id: string,
    hunter: UpdateHunterRequest
  ): Promise<HunterResponse> {
    await this.hunterRepository.update(id, hunter);
    const hunterEntity = await this.hunterRepository.findOneBy({
      id,
      isActive: true,
    });

    return this.hunterMapper.fromEntity(hunterEntity);
  }

  async delete(id: string): Promise<void> {
    const hunterEntity = await this.hunterRepository.findOneBy({
      id,
    });

    if (!hunterEntity) {
      throw new NotFoundException(`Hunter with id ${id} not exist`);
    }

    await this.hunterRepository.update(id, { isActive: false });
  }

  async findCampaignHunters(campaignId: string) {
    const hunterEntities = await this.hunterRepository
      .createQueryBuilder('hunters')
      .leftJoin('hunters.campaigns', 'campaigns')
      .where('campaigns.id = :campaignId', { campaignId })
      .getMany();

    return this.hunterMapper.fromEntities(hunterEntities);
  }

  async findAll({
    hunterIds,
    isApiResponse = true,
  }: {
    hunterIds?: string[];
    isApiResponse?: boolean;
  }): Promise<HunterResponse[] | HunterEntity[]> {
    const query = hunterIds ? { id: In(hunterIds) } : {};
    const hunterEntities = await this.hunterRepository.findBy(query);

    if (!isApiResponse) {
      return hunterEntities;
    }

    return this.hunterMapper.fromEntities(hunterEntities);
  }
}
