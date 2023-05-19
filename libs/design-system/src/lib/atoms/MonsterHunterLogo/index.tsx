import logo from '../../assets/logo_title.png';
import { IconProps } from '../../icons/types';
import { classNames } from '../../shared/classNames';
import styles from './MonsterHunterLogo.module.scss';

export function MonsterHunterWorldLogo({ size = 'sm' }: IconProps) {
  return (
    <img
      className={classNames(styles.logo, styles[`logo--${size}`])}
      src={logo}
      alt="Monster hunter world logo"
    />
  );
}
