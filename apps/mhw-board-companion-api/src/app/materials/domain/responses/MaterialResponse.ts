import { MaterialType } from '../enums/MaterialType';

export class MaterialResponse {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly isCommon: boolean,
    public readonly rarity: number,
    public readonly type: MaterialType
  ) {}
}
