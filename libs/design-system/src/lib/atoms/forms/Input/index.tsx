import { InputHTMLAttributes } from 'react';
import { classNames } from '../../../shared/classNames';
import { FormControl } from '../FormControl';

import styles from './Input.module.scss';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  hideError?: boolean;
};

export function Input({
  name,
  className,
  label,
  error = '',
  hideError = false,
  ...props
}: InputProps) {
  return (
    <FormControl error={error} hideError={hideError}>
      <div className={styles.inputContainer}>
        <label className={styles.input__label} htmlFor={`id-${name}`}>
          {label}
        </label>
        <input
          id={`id-${name}`}
          name={name}
          className={classNames(
            styles.input,
            className,
            error && styles['input--error']
          )}
          {...props}
        />
      </div>
    </FormControl>
  );
}
