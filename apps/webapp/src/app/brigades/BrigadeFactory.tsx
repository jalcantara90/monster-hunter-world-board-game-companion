import { BrigadeList } from './BrigadeList';
import { BrigadRepositoryService } from './BrigadeRepositoryService';

export class BrigadeFactory {
  static create() {
    const repository = new BrigadRepositoryService();

    return <BrigadeList brigadeRepository={repository} />;
  }
}
