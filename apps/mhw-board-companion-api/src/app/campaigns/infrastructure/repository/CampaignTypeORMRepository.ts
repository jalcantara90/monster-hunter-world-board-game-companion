import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import { CampaignMapper } from './CampaignMapper';
import { CampaignEntity } from '../entity/Campaign.entity';
import { CampaignRepository } from '../../domain/repository/CampaignRepository';
import { CampaignResponse } from '../../domain/responses/CampaignResponse';
import { CreateCampaignRequest } from '../../domain/requests/CreateCampaignRequest';
import { UpdateCampaignRequest } from '../../domain/requests/UpdateCampaignRequest';

@Injectable()
export class CampaignTypeORMRepository implements CampaignRepository {
  constructor(
    @InjectRepository(CampaignEntity)
    private campaignRepository: Repository<CampaignEntity>,
    private campaignMapper: CampaignMapper
  ) {}

  async find(id: string): Promise<CampaignResponse> {
    const campaignEntity = await this.campaignRepository.findOneBy({
      id,
      isActive: true,
    });

    if (!campaignEntity) {
      throw new NotFoundException(`Campaign with id ${id} not exist`);
    }

    return this.campaignMapper.fromEntity(campaignEntity);
  }

  async findAllByBrigadeId(brigadeId: string): Promise<CampaignResponse[]> {
    const campaignEntities = await this.campaignRepository
      .createQueryBuilder('campaigns')
      .leftJoinAndSelect('campaigns.brigadeId', 'brigades')
      .select('campaigns')
      .where('campaigns.brigadeId = :brigadeId', { brigadeId })
      .getMany();

    return this.campaignMapper.fromEntities(campaignEntities);
  }

  async create(campaign: CreateCampaignRequest): Promise<CampaignResponse> {
    const newCampaign = this.campaignRepository.create(campaign);
    const campaignEntity = await this.campaignRepository.save(newCampaign);

    return this.campaignMapper.fromEntity(campaignEntity);
  }

  async update(
    id: string,
    campaign: UpdateCampaignRequest
  ): Promise<CampaignResponse> {
    await this.campaignRepository.update(id, { name: campaign.name });
    const campaignEntity = await this.campaignRepository.findOneBy({
      id,
      isActive: true,
    });

    return this.campaignMapper.fromEntity(campaignEntity);
  }

  async delete(id: string): Promise<void> {
    const campaignEntity = await this.campaignRepository.findOneBy({
      id,
    });

    if (!campaignEntity) {
      throw new NotFoundException(`Campaign with id ${id} not exist`);
    }

    await this.campaignRepository.update(id, { isActive: false });
  }

  async updatePotions(id: string, potions: number): Promise<CampaignEntity> {
    await this.campaignRepository.update(id, { potions });
    return this.campaignRepository.findOneBy({
      id,
      isActive: true,
    });
  }
}
