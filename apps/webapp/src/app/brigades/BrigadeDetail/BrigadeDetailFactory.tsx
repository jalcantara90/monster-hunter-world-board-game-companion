import { BrigadeDetail } from './index';
import { BrigadeHttpRepository } from '../infrastructure/BrigadeHttpRepository';

export class BrigadeDetailFactory {
  static create() {
    const repository = new BrigadeHttpRepository();

    return <BrigadeDetail brigadeRepository={repository} />;
  }
}
