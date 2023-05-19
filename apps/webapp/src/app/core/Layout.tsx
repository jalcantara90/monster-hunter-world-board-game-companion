import {
  MonsterHunterWorldLogo,
  Popover,
  Header,
  Avatar,
} from '@mhwboard-companion/design-system';

import styles from './Layout.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { useAuth, useAuthentication, useLogin } from '../auth/AuthProvider';

export function Layout() {
  useAuthentication();
  const { user } = useAuth();
  const { logout } = useLogin();

  return (
    <>
      <Header>
        <Link to="/">
          <MonsterHunterWorldLogo size="sm" />
        </Link>
        <Popover actions={[{ label: 'Logout', action: () => logout() }]}>
          {user?.photoURL && <Avatar image={user.photoURL} size="sm" />}
        </Popover>
      </Header>
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
}
