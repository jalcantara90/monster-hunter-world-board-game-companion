export type Hunter = {
  id: string;
  name: string;
  palicoName: string;
};

export type CreateHunterRequest = Omit<Hunter, 'id'>;
export type UpdateHunterRequest = Hunter;
