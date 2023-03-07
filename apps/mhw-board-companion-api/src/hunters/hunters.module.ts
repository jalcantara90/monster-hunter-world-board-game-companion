import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { HuntersController } from './infrastructure/controller/hunters.controller';

import { hunterProviders } from './hunters.providers';
import { HunterEntity } from './domain/entities/Hunter.entity';
import { CreateHunterHandler } from './application/CreateHunter/CreateHunter.handler';
import { UpdateHunterHandler } from './application/UpdateHunter/UpdateHunter.handler';

const hunterHandlers = [CreateHunterHandler, UpdateHunterHandler];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([HunterEntity])],
  controllers: [HuntersController],
  providers: [...hunterProviders, ...hunterHandlers],
})
export class HuntersModule {}
