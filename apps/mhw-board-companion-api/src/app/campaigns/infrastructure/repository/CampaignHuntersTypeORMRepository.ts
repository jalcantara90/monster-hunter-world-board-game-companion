import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeaponType } from '../../../weapons/domain/enum/WeaponType';
import { CampaignHuntersRepository } from '../../domain/repository/CampaignHuntersRepository';
import { CampaignHuntersResponse } from '../../domain/responses/CampaignHuntersResponse';
import { CampaignHuntersEntity } from '../entity/Campaign.entity';
import { CampaignHuntersMapper } from './CampaignHuntersMapper';

export class CampaignHuntersTypeORMRepository
  implements CampaignHuntersRepository
{
  constructor(
    @InjectRepository(CampaignHuntersEntity)
    private campaignHuntersRepository: Repository<CampaignHuntersEntity>,
    private campaignHuntersMapper: CampaignHuntersMapper
  ) {}

  async getCampaignHunter(
    campaignId: string,
    hunterId: string
  ): Promise<CampaignHuntersResponse> {
    const campaignHunter = await this.campaignHuntersRepository
      .createQueryBuilder('campaign_hunters')
      .leftJoinAndSelect('campaign_hunters.hunter', 'hunter')
      .where('campaign_hunters.campaign = :campaignId', { campaignId })
      .andWhere('campaign_hunters.hunter = :hunterId', { hunterId })
      .getOne();

    return this.campaignHuntersMapper.fromEntity(campaignHunter);
  }

  async create(
    hunterId: string,
    campaignId: string,
    weaponType: WeaponType
  ): Promise<void> {
    const campaignHunter = this.campaignHuntersRepository.create({
      hunter: hunterId,
      campaign: campaignId,
      weaponType,
    });

    await this.campaignHuntersRepository.save(campaignHunter);
  }

  async getAllHunters(campaignId: string) {
    const campaignHunters = await this.campaignHuntersRepository
      .createQueryBuilder('campaign_hunters')
      .leftJoinAndSelect('campaign_hunters.hunter', 'hunter')
      .where('campaign_hunters.campaign = :campaignId', { campaignId })
      .getMany();

    return this.campaignHuntersMapper.fromEntities(campaignHunters);
  }
}
