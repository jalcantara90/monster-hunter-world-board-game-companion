import { SideMenu } from '@mhwboard-companion/design-system';

import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';

const routes = [
  {
    name: 'Campaigns',
    route: '/campaigns',
  },
  {
    name: 'Hunters',
    route: '/hunters',
  },
  {
    name: 'Brigades',
    route: '/',
  },
  {
    name: 'Armors',
    route: '/armors',
  },
  {
    name: 'Materials',
    route: '/materials',
  },
  {
    name: 'Monsters',
    route: '/monsters',
  },
  {
    name: 'Weapons',
    route: '/weapons',
  },
];

export function Layout() {
  return (
    <SideMenu items={routes}>
      <main className={styles.layout}>
        <Outlet />
      </main>
    </SideMenu>
  );
}
