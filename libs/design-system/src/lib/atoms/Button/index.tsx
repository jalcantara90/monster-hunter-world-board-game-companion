import styles from './Button.module.scss';
import { classNames } from '../../shared/classNames';

export interface ButtonProps {
  mode?: 'primary' | 'secondary' | 'tertiary' | 'inverted';
  size?: 'large' | 'small';
  children: string;
}

export function Button({
  mode = 'primary',
  size = 'large',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const componentProps = {
    className: classNames(
      styles['btn'],
      styles[`btn--${mode}`],
      styles[`btn--${size}`]
    ),
    ...props,
  };

  return <button {...componentProps} />;
}
