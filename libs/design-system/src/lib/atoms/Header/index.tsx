
import styles from './Header.module.scss';

import logo from '../../assets/logo_title.png';

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.header__image} src={logo} alt="" />
    </header>
  );
}
