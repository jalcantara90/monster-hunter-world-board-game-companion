import { Weapon } from './types';

export interface IWeaponRepository {
  findAll(): Promise<Weapon[]>;
}

export class WeaponRepositoryService implements IWeaponRepository {
  private readonly baseUrl = 'http://localhost:3099/api/weapons';
  async findAll(): Promise<Weapon[]> {
    const response = await fetch(this.baseUrl);

    return await response.json();
  }
}
