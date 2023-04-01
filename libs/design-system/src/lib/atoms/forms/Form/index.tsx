import { FormHTMLAttributes, ReactNode } from 'react';
import { classNames } from '../../../shared/classNames';

import styles from './Form.module.scss';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode | ReactNode[];
};

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={classNames(styles.form, className)} {...props}>
      {children}
    </form>
  );
}
