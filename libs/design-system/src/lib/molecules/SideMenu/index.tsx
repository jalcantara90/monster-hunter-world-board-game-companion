import { createContext, ReactNode, useContext, useState } from 'react';
import { BurgerButton } from '../../atoms/BurgerButton';
import { Header } from '../../atoms/Header';
import { LeftMenu } from '../../atoms/LeftMenu';

import styles from './SideMenu.module.scss';

type LeftMenuItem = {
  name: string;
  route: string;
};

export type SideMenuProps = {
  items: LeftMenuItem[];
  children: ReactNode | ReactNode[];
};

export function SideMenu({ items, children }: SideMenuProps) {
  return (
    <SideMenuContextProvider>
      <div className={styles.topBar}>
        <Header>
          <BurgerButton className={styles.floatingButton} />
        </Header>
      </div>

      <section className={styles.content}>
        <LeftMenu items={items} />
        {children}
      </section>
    </SideMenuContextProvider>
  );
}

type SideMenuContextProps = {
  active: boolean;
  toggleActive: () => void;
};
const toggleActive = () => {
  throw new Error('must be inside of SideMenuContextProvider');
};
const SideMenuContext = createContext<SideMenuContextProps>({
  active: false,
  toggleActive,
});

export function SideMenuContextProvider({
  children,
  initialActive = false,
}: {
  children: ReactNode | ReactNode[];
  initialActive?: boolean;
}) {
  const [active, setActive] = useState(initialActive);
  const toggleActive = () => {
    setActive((state) => !state);
  };

  return (
    <SideMenuContext.Provider value={{ active, toggleActive }}>
      {children}
    </SideMenuContext.Provider>
  );
}

export const useSideMenuContext = () => useContext(SideMenuContext);
