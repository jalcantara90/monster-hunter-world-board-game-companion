import { ReactNode } from 'react';

import styles from './FormControl.module.scss';

export type FormControlProps = {
  error: string;
  children: ReactNode | ReactNode[];
  hideError?: boolean;
};

export function FormControl({
  error,
  children,
  hideError = false,
}: FormControlProps) {
  return (
    <>
      {children}
      {!hideError && <p className={styles.formControl__error}>{error}</p>}
    </>
  );
}
