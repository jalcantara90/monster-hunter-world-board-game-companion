import { environment } from '../../environments/environment';
import { Weapon } from './types';

export interface IWeaponRepository {
  findAll(): Promise<Weapon[]>;
}

export class WeaponRepositoryService implements IWeaponRepository {
  private readonly baseUrl = `${environment.baseUrl}/weapons`;
  async findAll(): Promise<Weapon[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }
}
