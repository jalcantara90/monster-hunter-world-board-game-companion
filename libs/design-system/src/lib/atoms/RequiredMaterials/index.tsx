import styles from './RequiredMaterials.module.scss';

export type RequiredMaterial = {
  id: string;
  name: string;
  quantity: number;
};

export type RequiredMaterialsProps = {
  materials: RequiredMaterial[];
};

export function RequiredMaterials({ materials }: RequiredMaterialsProps) {
  return (
    <ul className={styles.requirementList}>
      {materials.map((material) => (
        <li key={material.id} className={styles.requirementList__item}>
          {material.name}{' '}
          <span className={styles.requirementList__secondaryText}>-</span>{' '}
          {material.quantity}
        </li>
      ))}
    </ul>
  );
}
