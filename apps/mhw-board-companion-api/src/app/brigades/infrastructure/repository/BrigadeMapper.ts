import { Injectable } from '@nestjs/common';
import { BrigadeEntity } from '../entity/Brigade.entity';
import { BrigadeResponse } from '../../domain/responses/BrigadeResponse';

@Injectable()
export class BrigadeMapper {
  fromEntity(brigade: BrigadeEntity): BrigadeResponse {
    return new BrigadeResponse(brigade.id, brigade.name);
  }

  fromEntities(brigadeList: BrigadeEntity[]) {
    return brigadeList.map((brigade) => this.fromEntity(brigade));
  }
}
