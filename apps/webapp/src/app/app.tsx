import {
  ModalContextProvider,
  ToastContainer,
} from '@mhwboard-companion/design-system';
import { Router } from './Router';
import { InventoryContextProvider } from './inventory/InvventoryContext';
import { AuthContextProvider } from './auth/AuthProvider';
import { SocketProvider } from './core/SocketContext';

export function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <SocketProvider>
          <InventoryContextProvider>
            <Router />
          </InventoryContextProvider>
          <ToastContainer />
        </SocketProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
