import { BrigadeDetail } from './index';
import { BrigadeContextProvider } from '../BrigadeContextProvider';

export class BrigadeDetailFactory {
  static create() {
    return (
      <BrigadeContextProvider>
        <BrigadeDetail />
      </BrigadeContextProvider>
    );
  }
}
