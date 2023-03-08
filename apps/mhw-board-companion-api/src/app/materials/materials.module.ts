import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { materialProviders } from './materials.providers';
import { MaterialEntity } from './infrastructure/entity/Material.entity';
import { MaterialsController } from './infrastructure/controller/materials.controller';
import { CreateMaterialHandler } from './application/CreateMaterial/CreateMaterial.handler';
import { GetMaterialHandler } from './application/GetMaterial/GetMaterial.handler';
import { DeleteMaterialHandler } from './application/DeleteMaterial/DeleteMaterial.handler';
import { UpdateMaterialHandler } from './application/UpdateMaterial/UpdateMaterial.handler';
import { GetMaterialListHandler } from './application/GetMaterialList/GetMaterialList.handler';

const commandHandlers = [
  CreateMaterialHandler,
  GetMaterialHandler,
  UpdateMaterialHandler,
  DeleteMaterialHandler,
  GetMaterialListHandler
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([MaterialEntity])],
  controllers: [MaterialsController],
  providers: [...commandHandlers, ...materialProviders],
})
export class MaterialsModule {}
