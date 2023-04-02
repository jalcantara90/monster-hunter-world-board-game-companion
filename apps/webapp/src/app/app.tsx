import {
  ModalContextProvider,
  ToastContainer,
} from '@mhwboard-companion/design-system';
import { Router } from './Router';

export function App() {
  return (
    <ModalContextProvider>
      <Router />
      <ToastContainer />
    </ModalContextProvider>
  );
}

export default App;
