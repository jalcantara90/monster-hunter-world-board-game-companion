import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../database/entities/Base.entity';
import { Element } from '../../../database/enums/ElementType';
import { MaterialEntity } from '../../../materials/infrastructure/entity/Material.entity';
import { MonsterEntity } from '../../../monsters/infrastructure/entity/Monster.entity';
import { ArmorPiece } from '../../domain/enum/ArmorPiece';
import { CraftingBranch } from '../../domain/enum/CraftingBranch';

@Entity({ name: 'armor' })
export class ArmorEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'int', default: 0 })
  defense: number;

  @Column({ type: 'enum', enum: ArmorPiece })
  armorPiece: ArmorPiece;

  @Column({ type: 'enum', enum: CraftingBranch })
  branch: CraftingBranch;

  @Column({ type: 'enum', enum: Element })
  elementalDefenseType: Element;

  @Column({ type: 'int', default: 0 })
  elementalDefense: number;

  @ManyToOne(() => MonsterEntity, (monster) => monster.id)
  @JoinColumn({ name: 'monsterId' })
  monster: string;
}

@Entity({ name: 'armor_crafting' })
export class ArmorCraftingEntity extends BaseEntity {
  @Column({ type: 'uuid' })
  armorId: string;

  @ManyToOne(() => MaterialEntity, (material) => material.id)
  @JoinColumn({ name: 'materialId' })
  materialId: string;

  @Column({ type: 'int', default: 1 })
  quantity: number;
}
