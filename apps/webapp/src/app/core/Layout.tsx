import { ReactNode } from 'react';
import { SideMenu } from '@mhwboard-companion/design-system';

import styles from './Layout.module.scss';

type LayoutProps = {
  children: ReactNode | ReactNode[];
};

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
    route: '/brigades',
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

export function Layout({ children }: LayoutProps) {
  console.log(styles.layout);
  return (
    <SideMenu items={routes}>
      <main className={styles.layout}>{children}</main>
    </SideMenu>
  );
}
