import { Column, Entity } from 'typeorm';
import { BaseEntity } from './Base.entity';

@Entity({ name: 'supplies' })
export class SupplyEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'int', default: 3 })
  max: number;
}
