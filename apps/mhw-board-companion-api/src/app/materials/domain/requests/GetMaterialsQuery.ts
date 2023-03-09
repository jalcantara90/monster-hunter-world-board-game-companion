import { MaterialType } from '../enums/MaterialType';

export interface GetMaterialsQuery {
  rarity?: number;
  isCommon?: boolean;
  name?: string;
  type?: MaterialType;
}
