import { useSideMenuContext } from '../../molecules/SideMenu';
import { classNames } from '../../shared/classNames';
import styles from './BurgerButton.module.scss';


export function BurgerButton() {
  const { active, toggleActive } = useSideMenuContext();

  const burgerButtonClassName = classNames(
    styles['burgerButton'],
    active ? styles['burgerButton--active'] : ''
  );

  return (
    <button
      className={burgerButtonClassName}
      onClick={() => toggleActive()}
    >
      <div className={styles.burgerButton__line}></div>
      <div className={styles.burgerButton__line}></div>
      <div className={styles.burgerButton__line}></div>
    </button>
  );
}
