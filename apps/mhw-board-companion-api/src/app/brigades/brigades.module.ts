import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrigadeEntity } from '@infra/entities/Brigade.entity';
import { GetBrigadeByIdHandler } from '@application/brigades/GetBrigadeById/GetBrigadeById.handler';
import { CreateBrigadeHandler } from '@application/brigades/CreateBrigade/CreateBrigade.handler';

import { BrigadesController } from './brigades.controller';

const commandHandlers = [CreateBrigadeHandler, GetBrigadeByIdHandler];

@Module({
  imports: [
    CqrsModule,
    TypeOrmModule.forFeature([BrigadeEntity])
  ],
  controllers: [BrigadesController],
  providers: [
    ...commandHandlers
  ],
})
export class BrigadesModule {}
