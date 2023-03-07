import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BrigadeEntity } from '@infra/entities/Brigade.entity';
import { CreateBrigadeHandler } from '@application/brigades/CreateBrigade/CreateBrigade.handler';
import { GetBrigadeByIdHandler } from '@application/brigades/GetBrigadeById/GetBrigadeById.handler';
import { UpdateBrigadeByIdHandler } from '@application/brigades/UpdateBrigadeById/UpdateBrigadeById.handler';
import { DeleteBrigadeByIdHandler } from '@application/brigades/DeleteBrigadeById/DeleteBrigadeById.handler';

import { BrigadesController } from './brigades.controller';

const commandHandlers = [
  CreateBrigadeHandler,
  GetBrigadeByIdHandler,
  UpdateBrigadeByIdHandler,
  DeleteBrigadeByIdHandler,
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([BrigadeEntity])],
  controllers: [BrigadesController],
  providers: [...commandHandlers],
})
export class BrigadesModule {}
