import { environment } from '../../environments/environment';
import { Weapon } from './types';

export interface IWeaponRepository {
  findAll(filters?: Partial<Weapon>): Promise<Weapon[]>;
}

export class WeaponRepositoryService implements IWeaponRepository {
  private readonly baseUrl = `${environment.baseUrl}/weapons`;
  async findAll({ weaponType }: Partial<Weapon>): Promise<Weapon[]> {
    const params = new URLSearchParams();
    if (weaponType) {
      params.append('weaponType', weaponType.toString());
    }
    const response = await fetch(`${this.baseUrl}?${params.toString()}`);

    return await response.json();
  }
}
