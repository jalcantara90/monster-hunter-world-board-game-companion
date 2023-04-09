import { IconProps } from './types';
import styles from './Icon.module.scss';

export function LeftChevronIcon({ size = 'sm' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles[`icon--${size}`]}
      viewBox="0 96 960 960"
      fill="currentColor"
    >
      <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" />
    </svg>
  );
}
