import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
  Query,
  Patch,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateInventoryRequest } from '../../domain/requests/CreateInventorieRequest';
import { CreateInventoryCommand } from '../../application/CreateInventory/CreateInventory.command';
import { GetInventorieCommand } from '../../application/GetInventorie/GetInventorie.command';
import { DeleteInventorieCommand } from '../../application/DeleteInventorie/DeleteInventorie.command';
import { GetInventorieQuery } from '../../domain/requests/GetInventorieQuery';
import { GetInventorieListCommand } from '../../application/GetInventorieList/GetInventorieList.command';
import { AddMaterialToInventoryRequest } from '../../domain/requests/AddMaterialToInventoryRequest';
import { AddMaterialCommand } from '../../application/AddMaterial/AddMaterial.command';
import { CraftArmorCommand } from '../../application/CraftArmor/CraftArmor.command';
import { ApiTags } from '@nestjs/swagger';
import { CraftWeaponCommand } from '../../application/CraftWeapon/CraftWeapon.command';
import { UpdateInventoryMaterialRequest } from '../../domain/requests/UpdateInventoryMaterialRequest';
import { UpdateInventoryItemCommand } from '../../application/UpdateInventoryItem/UpdateInventoryItem.command';

@ApiTags('Inventories')
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
      new AddMaterialCommand(inventoryId, request.materialId, request.quantity)
    );
  }

  @Post(':id/armors/:armorId/craft')
  @HttpCode(HttpStatus.CREATED)
  craftingArmor(
    @Param('id', ParseUUIDPipe) inventoryId: string,
    @Param('armorId', ParseUUIDPipe) armorId: string
  ) {
    return this.commandBus.execute(new CraftArmorCommand(inventoryId, armorId));
  }

  @Post(':id/weapons/:weaponId/craft')
  @HttpCode(HttpStatus.CREATED)
  craftingWeapon(
    @Param('id', ParseUUIDPipe) inventoryId: string,
    @Param('weaponId', ParseUUIDPipe) weaponId: string
  ) {
    return this.commandBus.execute(
      new CraftWeaponCommand(inventoryId, weaponId)
    );
  }

  @Patch('material/:inventoryMaterialId')
  updateInventoryItem(
    @Param('inventoryMaterialId', ParseUUIDPipe) inventoryMaterialId: string,
    @Body() request: UpdateInventoryMaterialRequest
  ) {
    return this.commandBus.execute(
      new UpdateInventoryItemCommand(inventoryMaterialId, request.quantity)
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

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteInventorieCommand(id));
  }
}
