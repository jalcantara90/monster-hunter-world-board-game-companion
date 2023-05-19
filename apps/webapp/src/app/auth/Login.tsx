import { useEffect } from 'react';
import { useLogin } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import { Button, MonsterHunterWorldLogo } from '@mhwboard-companion/design-system';

import styles from './Login.module.scss';

export function Login() {
  const { signInWithGoogle, user } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <main className={styles.login}>
      <div className={styles.login__content}>
        <MonsterHunterWorldLogo size="lg" />
        <Button onClick={() => signInWithGoogle()}>LOGIN</Button>
      </div>
    </main>
  );
}
