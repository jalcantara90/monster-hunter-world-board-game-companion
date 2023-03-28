import { BrigadeDetail } from './index';
import { BrigadRepositoryService } from '../BrigadeRepositoryService';

export class BrigadeDetailFactory {
  static create() {
    const repository = new BrigadRepositoryService();

    return <BrigadeDetail brigadeRepository={repository} />;
  }
}
