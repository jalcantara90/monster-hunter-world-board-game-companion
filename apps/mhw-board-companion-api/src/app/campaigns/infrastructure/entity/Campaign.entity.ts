import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BrigadeEntity } from '../../../brigades/infrastructure/entity/Brigade.entity';
import { BaseEntity } from '../../../database/entities/Base.entity';
import { HunterEntity } from '../../../hunters/infrastructure/entity/Hunter.entity';
import { WeaponType } from '../../../weapons/domain/enum/WeaponType';

@Entity({ name: 'campaigns' })
export class CampaignEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => BrigadeEntity, (brigade) => brigade.id)
  @JoinColumn()
  brigadeId: string;
}

@Entity({ name: 'campaign_hunters' })
export class CampaignHuntersEntity extends BaseEntity {
  @ManyToOne(() => HunterEntity, (hunter) => hunter.id)
  @JoinColumn({ name: 'hunterId' })
  hunter: string | HunterEntity;

  @ManyToOne(() => CampaignEntity, (campaign) => campaign.id)
  @JoinColumn({ name: 'campaignId' })
  campaign: string | CampaignEntity;

  @Column({ type: 'enum', enum: WeaponType })
  weaponType: WeaponType;
}
