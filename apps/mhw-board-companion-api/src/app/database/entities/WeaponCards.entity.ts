import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from './Base.entity';
import { WeaponEntity } from './Weapon.entity';

@Entity({ name: 'weapon_cards'})
export class WeaponCardEntity extends BaseEntity {
  @OneToOne(() => WeaponEntity, (weapon) => weapon.id)
  weaponId: string;

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
