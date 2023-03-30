import { InputHTMLAttributes } from 'react';
import { classNames } from '../../../shared/classNames';

import styles from './Input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ name, className, label, ...props }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.input__label} htmlFor={`id-${name}`}>
        {label}
      </label>
      <input
        id={`id-${name}`}
        name={name}
        className={classNames(styles.input, className)}
        {...props}
      />
    </div>
  );
}
