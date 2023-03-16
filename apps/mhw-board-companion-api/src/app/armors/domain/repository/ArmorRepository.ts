import { CreateArmorRequest } from '../requests/CreateArmorRequest';
import { GetArmorQuery } from '../requests/GetArmorQuery';
import { UpdateArmorRequest } from '../requests/UpdateArmorRequest';
import { ArmorResponse } from '../responses/ArmorResponse';

export interface ArmorRepository {
  find(id: string): Promise<ArmorResponse>;
  findAll(query?: Partial<GetArmorQuery>): Promise<ArmorResponse[]>;
  create(armor: CreateArmorRequest): Promise<ArmorResponse>;
  update(
    id: string,
    armor: Partial<UpdateArmorRequest>
  ): Promise<ArmorResponse>;
  delete(id: string): Promise<void>;
}

export const ARMOR_REPOSITORY = 'ARMOR_REPOSITORY';
