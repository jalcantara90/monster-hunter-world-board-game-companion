import { ReactNode } from 'react';
import styles from './FloatingButton.module.scss';

export interface FloatingButtonProps {
  children: ReactNode | ReactNode[];
}

export function FloatingButton({ children }: FloatingButtonProps) {
  return <button className={styles.floatingBtn}>{children}</button>;
}
