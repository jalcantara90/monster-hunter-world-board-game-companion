import { Column, Entity } from 'typeorm';
import { BaseEntity } from './Base.entity';

@Entity({ name: 'hunters' })
export class HunterEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  palicoName: string;
}
