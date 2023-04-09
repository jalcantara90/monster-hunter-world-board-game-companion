import { environment } from '../../environments/environment';
import { Material } from './types';

export interface IMaterialRepository {
  findAll(): Promise<Material[]>;
}

export class MaterialRepositoryService implements IMaterialRepository {
  private readonly baseUrl = `${environment.baseUrl}/materials`;

  async findAll(): Promise<Material[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }
}
