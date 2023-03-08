import { MaterialType } from '../../../database/enums/MaterialType';

export interface GetMaterialsQuery {
  rarity?: number;
  isCommon?: boolean;
  name?: string;
  type?: MaterialType;
}
