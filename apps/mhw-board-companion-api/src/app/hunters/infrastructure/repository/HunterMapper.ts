import { Injectable } from '@nestjs/common';
import { HunterEntity } from '../entity/Hunter.entity';
import { HunterResponse } from '../../domain/responses/HunterResponse';

@Injectable()
export class HunterMapper {
  fromEntity(hunter: HunterEntity): HunterResponse {
    return new HunterResponse(hunter.id, hunter.name, hunter.palicoName);
  }

  fromEntities(hunterList: HunterEntity[]): HunterResponse[] {
    return hunterList.map(
      (hunter) => new HunterResponse(hunter.id, hunter.name, hunter.palicoName)
    );
  }
}
