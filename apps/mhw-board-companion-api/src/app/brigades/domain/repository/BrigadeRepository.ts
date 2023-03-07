import { CreateBrigadeRequest } from "../requests/CreateBrigadeRequest";
import { UpdateBrigadeRequest } from "../requests/UpdateBrigadeRequest";
import { BrigadeResponse } from "../responses/BrigadeResponse";

export interface BrigadeRepository {
  find(id: string): Promise<BrigadeResponse>;
  create(brigade: CreateBrigadeRequest): Promise<BrigadeResponse>;
  update(id: string, brigade: UpdateBrigadeRequest): Promise<BrigadeResponse>;
  delete(id: string): Promise<void>;
}

export const BRIGADE_REPOSITORY = 'BRIGADE_REPOSITORY';
