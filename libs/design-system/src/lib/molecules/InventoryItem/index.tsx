import { useEffect, useState } from 'react';
import { PlusIcon } from '../../icons/PlusIcon';
import { SubstractIcon } from '../../icons/SubstractIcon';
import { useDebounce } from '@mhwboard-companion/utils';

import styles from './InventoryItem.module.scss';

export type InventoryItemProps = {
  name: string;
  id: string;
  quantity: number;
  update: (id: string, quantity: number) => void;
  max?: number;
  min?: number;
};
export function InventoryItem({
  id,
  name,
  quantity,
  update,
  max,
  min = 0,
}: InventoryItemProps) {
  const [computedQuantity, setComputedQuantity] = useState(quantity);
  const debouncedQuantity = useDebounce(computedQuantity);
  const [updated, setUpdated] = useState(false);

  const add = () => {
    setUpdated(true);

    setComputedQuantity((qty) => {
      const addedQty = qty + 1;
      if (max && max < addedQty) {
        return max;
      }

      return addedQty
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

    update(id, debouncedQuantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuantity, id]);

  useEffect(() => {
    if (computedQuantity === quantity) {
      return;
    }

    setComputedQuantity(quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity, setComputedQuantity]);

  return (
    <article className={styles.inventoryItem}>
      {name}
      <div className={styles.inventoryItem__actions}>
        <button onClick={substract} className={styles.inventoryItem__action}>
          <SubstractIcon />
        </button>
        {computedQuantity}
        <button onClick={add} className={styles.inventoryItem__action}>
          <PlusIcon />
        </button>
      </div>
    </article>
  );
}
