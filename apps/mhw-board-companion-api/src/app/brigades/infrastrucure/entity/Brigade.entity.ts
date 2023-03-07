import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../database/entities/Base.entity';

@Entity({ name: 'brigades' })
export class BrigadeEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;
}
