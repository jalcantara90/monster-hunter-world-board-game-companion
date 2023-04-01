import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './FloatingButton.module.scss';

export type FloatingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode | ReactNode[];
};

export function FloatingButton({ children, ...props }: FloatingButtonProps) {
  return (
    <button className={styles.floatingBtn} {...props}>
      {children}
    </button>
  );
}
