import styles from './Button.module.scss';

import { ArrowIcon } from '../../icons/Arrow';

export interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.btn}>
      {children}
      <ArrowIcon size="xs" />
    </button>
  );
}
