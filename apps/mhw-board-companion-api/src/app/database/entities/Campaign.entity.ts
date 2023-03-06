import {
  Column,
  Entity,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from './Base.entity';
import { BrigadeEntity } from './Brigade.entity';

@Entity({ name: 'campaings' })
export class CampaignEntity  extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToOne(() => BrigadeEntity, (brigade) => brigade.id)
  brigadeId: string;
}
