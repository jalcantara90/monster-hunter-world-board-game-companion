import { Column, Entity, ManyToMany } from 'typeorm';
import { CampaignEntity } from '../../../campaigns/infrastructure/entity/Campaign.entity';
import { BaseEntity } from '../../../database/entities/Base.entity';

@Entity({ name: 'hunters' })
export class HunterEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  palicoName: string;

  @ManyToMany(() => CampaignEntity, (campaign) => campaign.hunters)
  campaigns: CampaignEntity[];
}
