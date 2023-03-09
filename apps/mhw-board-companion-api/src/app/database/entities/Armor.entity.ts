import { Column } from 'typeorm';
import { Element } from '../enums/ElementType';
import { BaseEntity } from './Base.entity';

export class ArmorEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'int' })
  defense: number;

  @Column({ type: 'enum' })
  elementalDefenseType: Element;

  @Column({ type: 'int', default: 0 })
  elementalDefense: number;

  @Column({ type: 'boolean' })
  isStarting: boolean;
}
