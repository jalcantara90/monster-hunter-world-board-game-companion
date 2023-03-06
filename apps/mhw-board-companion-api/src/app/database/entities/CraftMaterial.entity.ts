import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { MaterialEntity } from './Material.entity';

@Entity({ name: 'crafting_materials' })
export class CraftingMaterialEntity extends BaseEntity {
  @Column({ type: 'uuid' })
  itemId: string;

  @OneToMany(() => MaterialEntity, (material) => material.id)
  materialId: string;

  @Column({ type: 'int' })
  quantity: number;
}
