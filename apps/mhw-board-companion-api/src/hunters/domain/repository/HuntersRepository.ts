import { CreateHunterRequest } from "../requests/CreateHunterRequest";
import { HunterResponse } from "../responses/HunterResponse";


export interface HunterRepository {
  // findById(id: string): Promise<BrigadeResponse>;
  create(hunter: CreateHunterRequest): Promise<HunterResponse>;
  // update(id: string, brigade: UpdateBrigadeRequest): Promise<BrigadeResponse>;
  // delete(id: string): Promise<void>;
}

export const HUNTER_REPOSITORY = 'BRIGADE_REPOSITORY';
