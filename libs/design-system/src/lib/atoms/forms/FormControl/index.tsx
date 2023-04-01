import { ReactNode } from "react";

import styles from './FormControl.module.scss';

export type FormControlProps = {
  error: string;
  children: ReactNode | ReactNode[];
}

export function FormControl({ error, children }: FormControlProps) {
  return (
    <>
      {children}
      <p className={styles.formControl__error}>{error}</p>
    </>
  );
}
