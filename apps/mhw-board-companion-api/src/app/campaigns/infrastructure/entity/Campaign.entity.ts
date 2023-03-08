import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BrigadeEntity } from '../../../brigades/infrastructure/entity/Brigade.entity';
import { BaseEntity } from '../../../database/entities/Base.entity';
import { HunterEntity } from '../../../hunters/infrastructure/entity/Hunter.entity';

@Entity({ name: 'campaigns' })
export class CampaignEntity  extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => BrigadeEntity, (brigade) => brigade.id)
  @JoinColumn()
  brigadeId: string;

  @ManyToMany(() => HunterEntity, (hunter) => hunter.campaigns, { cascade: true })
  @JoinTable({ name: 'campaings_hunters'})
  hunters: HunterEntity[];
}
