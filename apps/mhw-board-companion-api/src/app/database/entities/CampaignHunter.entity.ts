import {
  Entity,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from './Base.entity';
import { CampaignEntity } from './Campaign.entity';
import { HunterEntity } from '../../hunters/infrastructure/entity/Hunter.entity';

@Entity({ name: 'campaign_hunters'})
export class CampaignHunterEntity extends BaseEntity {
  @OneToOne(() => CampaignEntity, (campaign) => campaign.id)
  campaignId: string;

  @OneToOne(() => HunterEntity, (hunter) => hunter.id)
  hunterId: string;
}
