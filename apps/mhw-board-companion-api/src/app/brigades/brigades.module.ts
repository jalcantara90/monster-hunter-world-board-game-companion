import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { brigadeProviders } from './brigades.providers';
import { BrigadeEntity } from './infrastructure/entity/Brigade.entity';
import { BrigadesController } from './infrastructure/controller/brigades.controller';
import { CreateBrigadeHandler } from './application/CreateBrigade/CreateBrigade.handler';
import { GetBrigadeByIdHandler } from './application/GetBrigadeById/GetBrigadeById.handler';
import { DeleteBrigadeByIdHandler } from './application/DeleteBrigadeById/DeleteBrigadeById.handler';
import { UpdateBrigadeByIdHandler } from './application/UpdateBrigadeById/UpdateBrigadeById.handler';

const commandHandlers = [
  CreateBrigadeHandler,
  GetBrigadeByIdHandler,
  UpdateBrigadeByIdHandler,
  DeleteBrigadeByIdHandler,
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([BrigadeEntity])],
  controllers: [BrigadesController],
  providers: [...commandHandlers, ...brigadeProviders],
})
export class BrigadesModule {}
