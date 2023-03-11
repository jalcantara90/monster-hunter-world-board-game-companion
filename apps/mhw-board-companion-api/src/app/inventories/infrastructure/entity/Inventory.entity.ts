import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { ArmorEntity } from '../../../armors/infrastructure/entity/Armor.entity';
import { CampaignEntity } from '../../../campaigns/infrastructure/entity/Campaign.entity';
import { BaseEntity } from '../../../database/entities/Base.entity';
import { HunterEntity } from '../../../hunters/infrastructure/entity/Hunter.entity';
import { MaterialEntity } from '../../../materials/infrastructure/entity/Material.entity';
import { WeaponEntity } from '../../../weapons/infrastructure/entity/Weapon.entity';

@Entity({ name: 'inventories' })
export class InventoryEntity extends BaseEntity {
  @OneToOne(() => CampaignEntity, (campaign) => campaign.id)
  @Column({ type: 'uuid' })
  campaignId: string;

  @OneToOne(() => HunterEntity, (hunter) => hunter.id)
  @Column({ type: 'uuid' })
  hunterId: string;

  @OneToOne(() => InventoryItemsEntity, (inventoryItem) => inventoryItem.id)
  inventoryItemId: string;
}

@Entity({ name: 'inventory_items' })
export class InventoryItemsEntity extends BaseEntity {
  @OneToOne(() => InventoryEntity, (inventory) => inventory.id)
  @JoinColumn({ name: 'inventoryId' })
  inventoryId: string;

  @ManyToOne(() => MaterialEntity, (material) => material.id)
  @JoinColumn({ name: 'materialId' })
  materials: string;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @ManyToOne(() => ArmorEntity, (armor) => armor.id)
  @JoinColumn({ name: 'armorId' })
  armors: string;

  @ManyToOne(() => WeaponEntity, (weapon) => weapon.id)
  @JoinColumn({ name: 'weaponId' })
  weapons: string;
}
