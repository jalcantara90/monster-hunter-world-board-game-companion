import { CreateWeaponRequest } from '../requests/CreateWeaponRequest';
import { UpdateWeaponRequest } from '../requests/UpdateWeaponRequest';
import { GetWeaponQuery } from '../requests/GetWeaponQuery';
import { WeaponResponse } from '../responses/WeaponResponse';

export interface WeaponRepository {
  find(id: string): Promise<WeaponResponse>;
  findAll(query?: Partial<GetWeaponQuery>): Promise<WeaponResponse[]>;
  create(weapon: CreateWeaponRequest): Promise<WeaponResponse>;
  update(id: string, weapon: Partial<UpdateWeaponRequest>): Promise<WeaponResponse>;
  delete(id: string): Promise<void>;
}

export const WEAPON_REPOSITORY = 'WEAPON_REPOSITORY';
