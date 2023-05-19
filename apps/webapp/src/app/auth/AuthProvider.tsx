import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  signOut,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@mhwboard-companion/design-system';

const AuthContext = createContext<{ auth: Auth }>({ auth: {} as Auth });

type AuthContextProviderProps = {
  children: ReactNode | ReactNode[];
};

const firebaseConfig = {
  apiKey: 'AIzaSyA7WRXL0SFzcVf060Su6yOvCZHpWFl-pwA',
  authDomain: 'mhw-board-companion.firebaseapp.com',
  projectId: 'mhw-board-companion',
  storageBucket: 'mhw-board-companion.appspot.com',
  messagingSenderId: '440001128281',
  appId: '1:440001128281:web:a2552542390bbe8f094e48',
  measurementId: 'G-9J1KRDF6HE',
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
}

export function useAuthentication() {
  const { auth } = useContext(AuthContext);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      return navigate('/login');
    }
  }, [user, loading, navigate]);
}

export function useAuth() {
  const { auth } = useContext(AuthContext);

  const [user, loading, error] = useAuthState(auth);
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error, toast]);

  return { user, loading };
}

export function useLogin() {
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState<User>();
  const toast = useToast();

  const signInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      setUser(user);
    } catch (err) {
      console.error(err);
      toast.error((err as { message: string }).message);
    }
  };

  const logout = () => signOut(auth);

  return {
    signInWithGoogle,
    logout,
    user,
  };
}
