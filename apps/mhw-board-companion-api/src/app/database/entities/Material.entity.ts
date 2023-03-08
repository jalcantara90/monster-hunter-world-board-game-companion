import { Column, Entity } from 'typeorm';
import { MaterialType } from '../enums/MaterialType';
import { BaseEntity } from './Base.entity';

export enum MaterialQuality {
  RARITY1,
  RARITY2,
  RARITY3,
  RARITY4,
  RARITY5,
}

@Entity({ name: 'materials' })
export class MaterialEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'boolean', default: false })
  isCommon: boolean;

  @Column({ type: 'number' })
  rarity: number;

  @Column({ type: 'enum', enum: MaterialType })
  type: MaterialType;
}
