import { useSideMenuContext } from '../../molecules/SideMenu';
import { classNames } from '../../shared/classNames';
import styles from './BurgerButton.module.scss';

type BurgerButtonProps = {
  className?: string;
}
export function BurgerButton({ className }: BurgerButtonProps) {
  const { active, toggleActive } = useSideMenuContext();

  const burgerButtonClassName = classNames(
    styles['burgerButton'],
    active ? styles['burgerButton--active'] : '',
    className
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
