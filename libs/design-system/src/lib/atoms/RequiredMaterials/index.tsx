import {
  HasEnoughMaterials,
  useCheckRequirements,
} from '../../hooks/useCheckRequirements';
import { classNames } from '../../shared/classNames';
import styles from './RequiredMaterials.module.scss';

export type RequiredMaterial = {
  id: string;
  name: string;
  quantity: number;
};

export type RequiredMaterialsProps = {
  materials: RequiredMaterial[];
  inventoryMaterials: RequiredMaterial[];
};

export function RequiredMaterials({
  materials,
  inventoryMaterials,
}: RequiredMaterialsProps) {
  const checkRequirements = useCheckRequirements();

  return (
    <ul className={styles.requirementList}>
      {materials.map((material) => {
        const requirements = checkRequirements(material, inventoryMaterials);

        return (
          <li
            key={material.id}
            className={classNames(
              styles.requirementList__item,
              inventoryMaterials.length
                ? styles[`requirementList__item--${requirements.check}`]
                : ''
            )}
          >
            {material.name}
            <span className={styles.requirementList__secondaryText}>-</span>
            {material.quantity}
            {requirements.check === HasEnoughMaterials.NOT_HAS_ENOUGH && (
              <span className={styles.quantityLeft}>
                {requirements.quantityLeft} left
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
