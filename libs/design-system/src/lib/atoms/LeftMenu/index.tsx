import { useSideMenuContext } from '../../molecules/SideMenu';
import { classNames } from '../../shared/classNames';
import styles from './LeftMenu.module.scss';

type LeftMenuItem = {
  name: string;
  route: string;
};

export type LeftMenuProps = {
  items: LeftMenuItem[];
};

export function LeftMenu({ items }: LeftMenuProps) {
  const { active } = useSideMenuContext();

  const leftMenuClassNames = classNames(
    styles.leftMenu,
    active ? styles['leftMenu--open'] : ''
  );

  return (
    <nav className={leftMenuClassNames}>
      <ul className={styles.leftMenu__list}>
        {items.map((item) => (
          <li className={styles.leftMenu__listItem} key={item.name}>
            <a href={item.route}> {item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
