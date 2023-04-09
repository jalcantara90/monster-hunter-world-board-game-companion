import { environment } from '../../environments/environment';
import { Armor } from './types';

export interface IArmorRepository {
  findAll(): Promise<Armor[]>;
}

export class ArmorRepositoryService implements IArmorRepository {
  private readonly baseUrl = `${environment.baseUrl}/armors`;

  async findAll(): Promise<Armor[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }
}
