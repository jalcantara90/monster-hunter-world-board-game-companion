
import { IconSizes } from '../../icons/types';
import { classNames } from '../../shared/classNames';
import styles from './Avatar.module.scss';

export type AvatarProps = {
  image: string;
  size?: IconSizes;
};

export function Avatar({ image, size = 'sm' }: AvatarProps) {
  return (
    <figure className={classNames(styles.avatar, styles[`avatar--${size}`])}>
      <img src={image} alt="User avatar" referrerPolicy="no-referrer" />
    </figure>
  );
}
