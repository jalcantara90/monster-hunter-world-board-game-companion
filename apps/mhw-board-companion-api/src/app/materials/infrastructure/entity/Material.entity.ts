import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../database/entities/Base.entity';
import { MaterialType } from '../../../database/enums/MaterialType';

@Entity({ name: 'materials' })
export class MaterialEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'boolean', default: false })
  isCommon: boolean;

  @Column({ type: 'int' })
  rarity: number;

  @Column({ type: 'enum', enum: MaterialType })
  type: MaterialType;
}
