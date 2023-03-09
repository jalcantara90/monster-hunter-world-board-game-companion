import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../../database/entities/Base.entity';
import { MonsterEntity } from '../../../monsters/infrastructure/entity/Monster.entity';
import { CraftingBranch } from '../../domain/enum/CraftingBranch';
import { WeaponType } from '../../domain/enum/WeaponType';

@Entity({ name: 'weapon' })
export class WeaponEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'enum', enum: WeaponType })
  weaponType: WeaponType;

  @Column({ type: 'enum', enum: CraftingBranch })
  branch: CraftingBranch;

  @ManyToOne(() => MonsterEntity, (monster) => monster.id)
  @JoinColumn({ name: 'monsterId' })
  monster: string;

  @Column({ type: 'int', default: 0 })
  defense: number;

  @Column({ type: 'int' })
  damageOne: number;

  @Column({ type: 'int' })
  damageTwo: number;

  @Column({ type: 'int' })
  damageThree: number;

  @Column({ type: 'int' })
  damageFour: number;

  @Column({ type: 'int' })
  damageFive: number;
}
