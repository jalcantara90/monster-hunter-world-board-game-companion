import { BrigadeList } from './BrigadeList';
import { BrigadeHttpRepository } from './infrastructure/BrigadeHttpRepository';

export class BrigadeFactory {
  static create() {
    const repository = new BrigadeHttpRepository();

    return <BrigadeList brigadeRepository={repository} />;
  }
}
