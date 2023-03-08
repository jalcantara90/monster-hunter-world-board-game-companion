import { CreateMaterialRequest } from '../requests/CreateMaterialRequest';
import { GetMaterialsQuery } from '../requests/GetMaterialsQuery';
import { UpdateMaterialRequest } from '../requests/UpdateMaterialRequest';
import { MaterialResponse } from '../responses/MaterialResponse';

export interface MaterialRepository {
  find(id: string): Promise<MaterialResponse>;
  findAll(query?: GetMaterialsQuery): Promise<MaterialResponse[]>;
  create(material: CreateMaterialRequest): Promise<MaterialResponse>;
  update(
    id: string,
    material: UpdateMaterialRequest
  ): Promise<MaterialResponse>;
  delete(id: string): Promise<void>;
}

export const MATERIAL_REPOSITORY = 'MATERIAL_REPOSITORY';
