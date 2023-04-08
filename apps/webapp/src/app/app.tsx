import {
  ModalContextProvider,
  ToastContainer,
} from '@mhwboard-companion/design-system';
import { Router } from './Router';
import { InventoryContextProvider } from './inventory/InvventoryContext';

export function App() {
  return (
    <ModalContextProvider>
      <InventoryContextProvider>
        <Router />
      </InventoryContextProvider>
      <ToastContainer />
    </ModalContextProvider>
  );
}

export default App;
