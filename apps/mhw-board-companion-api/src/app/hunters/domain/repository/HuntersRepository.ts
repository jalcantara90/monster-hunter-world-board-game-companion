import { HunterResponse } from '../responses/HunterResponse';
import { CreateHunterRequest } from '../requests/CreateHunterRequest';
import { UpdateHunterRequest } from '../requests/UpdateHunterRequest';
import { HunterEntity } from '../../infrastructure/entity/Hunter.entity';

export interface HunterRepository {
  find(id: string): Promise<HunterResponse>;
  findAll({
    hunterIds,
    isApiResponse,
  }: {
    hunterIds?: string[];
    isApiResponse?: boolean;
  }): Promise<HunterResponse[] | HunterEntity[]>;
  findCampaignHunters(campaignId: string): Promise<HunterResponse[]>;
  create(hunter: CreateHunterRequest): Promise<HunterResponse>;
  update(id: string, hunter: UpdateHunterRequest): Promise<HunterResponse>;
  delete(id: string): Promise<void>;
}

export const HUNTER_REPOSITORY = 'HUNTER_REPOSITORY';
