import { HunterResponse } from '../responses/HunterResponse';
import { CreateHunterRequest } from '../requests/CreateHunterRequest';
import { UpdateHunterRequest } from '../requests/UpdateHunterRequest';

export interface HunterRepository {
  // findById(id: string): Promise<BrigadeResponse>;
  create(hunter: CreateHunterRequest): Promise<HunterResponse>;
  update(id: string, hunter: UpdateHunterRequest): Promise<HunterResponse>;
  // delete(id: string): Promise<void>;
}

export const HUNTER_REPOSITORY = 'BRIGADE_REPOSITORY';
