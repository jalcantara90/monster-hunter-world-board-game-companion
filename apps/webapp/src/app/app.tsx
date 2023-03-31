import { ModalContextProvider } from '@mhwboard-companion/design-system';
import { Router } from './Router';

export function App() {
  return (
    <ModalContextProvider>
      <Router />
    </ModalContextProvider>
  );
}

export default App;
