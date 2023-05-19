import {
  ModalContextProvider,
  ToastContainer,
} from '@mhwboard-companion/design-system';
import { Router } from './Router';
import { InventoryContextProvider } from './inventory/InvventoryContext';
import { AuthContextProvider } from './auth/AuthProvider';

export function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <InventoryContextProvider>
          <Router />
        </InventoryContextProvider>
        <ToastContainer />
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
