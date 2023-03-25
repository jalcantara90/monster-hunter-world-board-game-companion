
import { ReactNode } from 'react';
import styles from './ListContainer.module.scss';

type ListContainerProps = {
  children: ReactNode | ReactNode[];
}

export function ListContainer({ children }: ListContainerProps) {
  return (
    <div className={styles.list__container}>
      {children}
    </div>
  )
}
