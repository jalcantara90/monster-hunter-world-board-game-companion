import { Column, Entity } from 'typeorm';
import { BaseEntity } from './Base.entity';

@Entity({ name: 'brigades' })
export class BrigadeEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;
}
