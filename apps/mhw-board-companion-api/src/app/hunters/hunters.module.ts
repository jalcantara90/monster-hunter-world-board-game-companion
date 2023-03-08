import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HuntersController } from './infrastructure/controller/hunters.controller';

import { hunterProviders } from './hunters.providers';
import { HunterEntity } from './infrastructure/entity/Hunter.entity';
import { CreateHunterHandler } from './application/CreateHunter/CreateHunter.handler';
import { UpdateHunterHandler } from './application/UpdateHunter/UpdateHunter.handler';
import { GetHunterByIdHandler } from './application/GetHunter/GetHunterById.handler';
import { DeleteHunterByIdHandler } from './application/DeleteHunter/DeleteHunterById.handler';

const hunterHandlers = [
  CreateHunterHandler,
  UpdateHunterHandler,
  GetHunterByIdHandler,
  DeleteHunterByIdHandler,
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([HunterEntity])],
  controllers: [HuntersController],
  providers: [...hunterProviders, ...hunterHandlers],
})
export class HuntersModule {}
