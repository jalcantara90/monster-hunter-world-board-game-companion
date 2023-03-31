import { ButtonHTMLAttributes } from 'react';
import { classNames } from '../../shared/classNames';
import styles from './Button.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string;
  variant?: 'primary' | 'secondary' | 'inverted';
};

export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.btn, styles[`btn--${variant}`])}
      {...props}
    >
      {children}
    </button>
  );
}
