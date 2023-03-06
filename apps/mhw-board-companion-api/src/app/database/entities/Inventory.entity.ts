import { Entity, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./Base.entity";
import { MaterialEntity } from "./Material.entity";

@Entity({ name: 'inventories' })
export class InventoryEntity extends BaseEntity {
  @OneToOne(() => MaterialEntity, (material) => material.id)
  hunterId: string;

  @OneToMany(() => MaterialEntity, (materials) => materials.id)
  materials: string[];
}
