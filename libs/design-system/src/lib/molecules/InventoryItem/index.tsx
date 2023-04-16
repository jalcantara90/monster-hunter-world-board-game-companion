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
};
export function InventoryItem({
  id,
  name,
  quantity,
  update
}: InventoryItemProps) {
  const [computedQuantity, setComputedQuantity] = useState(quantity);
  const debouncedQuantity = useDebounce(computedQuantity);
  const [updated, setUpdated] = useState(false);

  const add = () => {
    setUpdated(true);
    setComputedQuantity((qty) => qty + 1);
  };

  const substract = () => {
    setUpdated(true);
    setComputedQuantity((qty) => {
      const substractedQty = qty - 1;

      if (qty - 1 > 0) {
        return substractedQty;
      }

      return 0;
    });
  };

  useEffect(() => {
    if (!updated) {
      return;
    }

    update(id, debouncedQuantity);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuantity, id]);

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
