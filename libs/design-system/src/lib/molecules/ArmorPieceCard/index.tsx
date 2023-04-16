import { ArmorPiece, Elemental } from '@mhwboard-companion/common-api';
import { ArmorIcon } from '../../atoms/ArmorIcon';
import { Button } from '../../atoms/Button';
import { ElementType } from '../../atoms/ElementType';
import { DefenseIcon } from '../../icons/DefenseIcon';
import {
  RequiredMaterial,
  RequiredMaterials,
} from '../../atoms/RequiredMaterials';

import styles from './ArmorPiece.module.scss';

export type ArmorPieceCardProps = {
  id: string;
  name: string;
  armorPiece: ArmorPiece;
  defense: number;
  elementalDefense: number;
  elementalDefenseType: Elemental;
  materials?: RequiredMaterial[];
  inventoryMaterials?: RequiredMaterial[];
  craftArmor?: (armorId: string) => void;
};

export function ArmorPieceCard({
  id,
  name,
  armorPiece,
  defense,
  elementalDefense = 0,
  elementalDefenseType = Elemental.NONELEMENTAL,
  craftArmor,
  materials = [],
  inventoryMaterials = [],
}: ArmorPieceCardProps) {
  return (
    <article className={styles.armorPiece}>
      <div className={styles.armorPiece__info}>
        <ArmorIcon armorPiece={armorPiece} size="lg" />
        {name}
        {craftArmor && (
          <Button
            className={styles.armorPiece__craftAction}
            variant="inverted"
            onClick={() => craftArmor(id)}
          >
            Craft
          </Button>
        )}
      </div>
      <div className={styles.armorPiece__defense}>
        <div className={styles.defenseGroup}>
          <DefenseIcon size="lg" />
          {defense}
        </div>

        {elementalDefenseType !== Elemental.NONELEMENTAL &&
          Boolean(elementalDefense) && (
            <div className={styles.defenseGroup}>
              <ElementType elementType={elementalDefenseType} />
              {elementalDefense}
            </div>
          )}
      </div>
      {Boolean(materials.length) && (
        <div className={styles.armorPiece__requirements}>
          <div className={styles.armorPiece__secondaryText}>
            Craft requirement:
          </div>
          <RequiredMaterials
            materials={materials}
            inventoryMaterials={inventoryMaterials}
          />
        </div>
      )}
    </article>
  );
}
