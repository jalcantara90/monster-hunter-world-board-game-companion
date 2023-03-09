import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../database/entities/Base.entity';

@Entity({ name: 'monster' })
export class MonsterEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'int' })
  difficulty: number;
}
