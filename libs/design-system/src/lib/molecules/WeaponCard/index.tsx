import { WeaponType } from '@mhwboard-companion/common-api';
import { Button } from '../../atoms/Button';
import { WeaponIcon } from '../../atoms/WeaponIcon';
import { DefenseIcon } from '../../icons/DefenseIcon';
import {
  RequiredMaterial,
  RequiredMaterials,
} from '../../atoms/RequiredMaterials';
import styles from './WeaponCard.module.scss';

type PreviousWeapon = {
  name: string;
  id: string;
};

export type WeaponCardProps = {
  id: string;
  weaponType: WeaponType;
  name: string;
  materials?: RequiredMaterial[];
  inventoryMaterials?: RequiredMaterial[];
  previousWeapon?: PreviousWeapon;
  defense?: number;
  damageOne?: number;
  damageTwo?: number;
  damageThree?: number;
  damageFour?: number;
  damageFive?: number;
  craftWeapon?: (weaponId: string) => void;
};

export function WeaponCard({
  id,
  name,
  materials = [],
  inventoryMaterials = [],
  previousWeapon,
  weaponType,
  damageOne = 0,
  damageTwo = 0,
  damageThree = 0,
  damageFour = 0,
  damageFive = 0,
  defense = 0,
  craftWeapon,
}: WeaponCardProps) {
  return (
    <article className={styles.weaponCard}>
      <div className={styles.weaponCard__info}>
        <div className={styles.info__header}>
          <WeaponIcon weaponType={weaponType} size="lg" />
          {name}
          {craftWeapon && (
            <Button
              className={styles.weaponCard__craftAction}
              variant="inverted"
              onClick={() => craftWeapon(id)}
            >
              Craft
            </Button>
          )}
        </div>
        <ul className={styles.damageList}>
          {Boolean(damageOne) && (
            <li className={styles.damageList__item}>
              1
              <span className={styles.weaponCard__secondaryText}>
                x{damageOne}
              </span>
            </li>
          )}
          {Boolean(damageTwo) && (
            <li className={styles.damageList__item}>
              2
              <span className={styles.weaponCard__secondaryText}>
                x{damageTwo}
              </span>
            </li>
          )}
          {Boolean(damageThree) && (
            <li className={styles.damageList__item}>
              3
              <span className={styles.weaponCard__secondaryText}>
                x{damageThree}
              </span>
            </li>
          )}
          {Boolean(damageFour) && (
            <li className={styles.damageList__item}>
              4
              <span className={styles.weaponCard__secondaryText}>
                x{damageFour}
              </span>
            </li>
          )}
          {Boolean(damageFive) && (
            <li className={styles.damageList__item}>
              5
              <span className={styles.weaponCard__secondaryText}>
                x{damageFive}
              </span>
            </li>
          )}
        </ul>
        {Boolean(defense) && (
          <div className={styles.defense}>
            <DefenseIcon size="lg" />
            {defense}
          </div>
        )}
      </div>
      {Boolean(materials.length) && (
        <div className={styles.weaponCard__requirements}>
          <div className={styles.weaponCard__secondaryText}>
            Craft requirement:
          </div>
          <RequiredMaterials
            materials={materials}
            inventoryMaterials={inventoryMaterials}
          />

          {previousWeapon && (
            <div className={styles.previousWeapon}>
              <span className={styles.weaponCard__secondaryText}>
                Previous weapon:
              </span>
              {previousWeapon.name}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
