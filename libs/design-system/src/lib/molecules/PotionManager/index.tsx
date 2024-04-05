import { useEffect, useState } from 'react';
import { PlusIcon } from '../../icons/PlusIcon';
import { PotionIcon } from '../../icons/PotionIcon';
import { SubstractIcon } from '../../icons/SubstractIcon';

import styles from './PotionManager.module.scss';
import { useDebounce } from '@mhwboard-companion/utils';

export type PotionManagerProps = {
  potions: number;
  update: (quantity: number) => void;
};
const max = 3;
const min = 0;

export function PotionManager({ potions, update }: PotionManagerProps) {
  const [computedQuantity, setComputedQuantity] = useState(potions);
  const debouncedQuantity = useDebounce(computedQuantity);
  const [updated, setUpdated] = useState(false);

  const add = () => {
    setUpdated(true);

    setComputedQuantity((qty) => {
      const addedQty = qty + 1;
      if (max && max < addedQty) {
        return max;
      }

      return addedQty;
    });
  };

  const substract = () => {
    setUpdated(true);
    setComputedQuantity((qty) => {
      const substractedQty = qty - 1;

      if (qty - 1 > min) {
        return substractedQty;
      }

      return min;
    });
  };

  useEffect(() => {
    if (!updated) {
      return;
    }

    update(debouncedQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuantity]);

  useEffect(() => {
    if (computedQuantity === potions) {
      return;
    }

    setComputedQuantity(potions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [potions, setComputedQuantity]);

  return (
    <section className={styles.potionsManager}>
      <div className={styles.potionsManager__container}>
        <input
          id="potionsCheckbox"
          type="checkbox"
          className={styles.potionsManager__checkbox}
        />
        <label
          className={styles.potionsManager__icon}
          htmlFor="potionsCheckbox"
        >
          <PotionIcon />
        </label>
        <div className={styles.potionsManager__content}>
          <button onClick={substract} className={styles.potionsManager__action}>
            <SubstractIcon />
          </button>
          {computedQuantity}
          <button onClick={add} className={styles.potionsManager__action}>
            <PlusIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
