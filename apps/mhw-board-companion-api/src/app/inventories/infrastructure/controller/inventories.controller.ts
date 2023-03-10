import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateInventoryRequest } from '../../domain/requests/CreateInventorieRequest';
import { UpdateInventorieRequest } from '../../domain/requests/UpdateInventorieRequest';
import { CreateInventoryCommand } from '../../application/CreateInventory/CreateInventory.command';
import { GetInventorieCommand } from '../../application/GetInventorie/GetInventorie.command';
import { UpdateInventorieCommand } from '../../application/UpdateInventorie/UpdateInventorie.command';
import { DeleteInventorieCommand } from '../../application/DeleteInventorie/DeleteInventorie.command';
import { GetInventorieQuery } from '../../domain/requests/GetInventorieQuery';
import { GetInventorieListCommand } from '../../application/GetInventorieList/GetInventorieList.command';
import { AddMaterialToInventoryRequest } from '../../domain/requests/AddMaterialToInventoryRequest';
import { AddMaterialCommand } from '../../application/AddMaterial/AddMaterial.command';

@Controller('inventories')
export class InventoriesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: CreateInventoryRequest) {
    return this.commandBus.execute(
      new CreateInventoryCommand(request.campaignId, request.hunterId)
    );
  }

  @Post(':id/materials')
  @HttpCode(HttpStatus.CREATED)
  addMaterial(
    @Param('id', ParseUUIDPipe) inventoryId: string,
    @Body() request: AddMaterialToInventoryRequest
  ) {
    return this.commandBus.execute(
      new AddMaterialCommand(
        inventoryId,
        request.materialId,
        request.quantity
      )
    );
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: GetInventorieQuery) {
    return this.commandBus.execute(new GetInventorieListCommand(query));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetInventorieCommand(id));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateInventorieRequest
  ) {
    return this.commandBus.execute(
      new UpdateInventorieCommand(id, request.name)
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteInventorieCommand(id));
  }
}
