import { ReactNode } from 'react';

import styles from './AddHunterButton.module.scss';

export type AddHunterButtonProps = {
  children: ReactNode | ReactNode[];
  onClick: () => void;
};

export function AddHunterButton({ children, onClick }: AddHunterButtonProps) {
  return (
    <button className={styles.addHunterButton} onClick={onClick}>
      {children}
    </button>
  );
}
