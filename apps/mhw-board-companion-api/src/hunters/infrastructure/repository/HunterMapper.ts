import { Injectable } from '@nestjs/common';
import { HunterEntity } from '../../domain/entities/Hunter.entity';
import { HunterResponse } from '../../domain/responses/HunterResponse';

@Injectable()
export class HunterMapper {
  fromEntity(hunter: HunterEntity): HunterResponse {
    return new HunterResponse(hunter.id, hunter.name, hunter.palicoName);
  }
}
