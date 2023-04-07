export enum MaterialType {
  ORE,
  BONE,
  HIDE,
  MONSTER_PART,
}

export type Material = {
  id: string;
  name: string;
  isCommon: boolean;
  rarity: number;
  type: MaterialType;
};
