export type Brigade = {
  id: string;
  name: string;
}
export type CreateBrigadeRequest = Omit<Brigade, 'id'>;
export type UpdateBrigadeRequest = Brigade;
