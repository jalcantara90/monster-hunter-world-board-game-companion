import { ReactNode } from 'react';
import styles from './Header.module.scss';

export type HeaderProps = {
  children: ReactNode | ReactNode[];
};

export function Header({ children }: HeaderProps) {
  return <header className={styles.header}>{children}</header>;
}
