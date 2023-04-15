import { SideMenu } from '@mhwboard-companion/design-system';

import styles from './Layout.module.scss';
import { Outlet } from 'react-router-dom';

const routes = [
  {
    name: 'Home',
    route: '/',
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
