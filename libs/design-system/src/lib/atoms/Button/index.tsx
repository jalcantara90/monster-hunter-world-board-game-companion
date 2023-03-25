import styles from './Button.module.scss';

export interface ButtonProps {
  children: string;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className={styles.btn}>
      {children}
    </button>
  );
}
