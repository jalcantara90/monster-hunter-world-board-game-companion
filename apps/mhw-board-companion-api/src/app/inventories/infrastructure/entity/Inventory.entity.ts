import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ArmorEntity } from '../../../armors/infrastructure/entity/Armor.entity';
import { CampaignEntity } from '../../../campaigns/infrastructure/entity/Campaign.entity';
import { BaseEntity } from '../../../database/entities/Base.entity';
import { HunterEntity } from '../../../hunters/infrastructure/entity/Hunter.entity';
import { MaterialEntity } from '../../../materials/infrastructure/entity/Material.entity';
import { WeaponEntity } from '../../../weapons/infrastructure/entity/Weapon.entity';

@Entity({ name: 'inventories' })
export class InventoryEntity extends BaseEntity {
  @ManyToOne(() => CampaignEntity, (campaign) => campaign.id)
  @JoinColumn()
  campaign: string;

  @ManyToOne(() => HunterEntity, (hunter) => hunter.id)
  @JoinColumn()
  hunter: string;
}

@Entity({ name: 'inventory_items' })
export class InventoryItemsEntity extends BaseEntity {
  @ManyToOne(() => InventoryEntity, (inventory) => inventory.id)
  @JoinColumn({ name: 'inventoryId' })
  inventoryId: string;

  @ManyToOne(() => MaterialEntity, (material) => material.id)
  @JoinColumn({ name: 'materialId' })
  material: string | MaterialEntity;

  @Column({ type: 'int', default: 1 })
  quantity: number;

  @ManyToOne(() => ArmorEntity, (armor) => armor.id)
  @JoinColumn({ name: 'armorId' })
  armor: string | ArmorEntity;

  @ManyToOne(() => WeaponEntity, (weapon) => weapon.id)
  @JoinColumn({ name: 'weaponId' })
  weapon: string | WeaponEntity;
}
