import { BrigadeList } from './BrigadeList';
import { BrigadeContextProvider } from './BrigadeContextProvider';

export class BrigadeFactory {
  static create() {
    return (
      <BrigadeContextProvider>
        <BrigadeList />
      </BrigadeContextProvider>
    );
  }
}
