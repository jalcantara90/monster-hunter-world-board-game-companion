import { Column, Entity } from 'typeorm';
import { BaseEntity } from './Base.entity';

@Entity({ name: 'weapons' })
export class WeaponEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'boolean' })
  isStarting: boolean;
}
