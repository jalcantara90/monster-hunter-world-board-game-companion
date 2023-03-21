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

import { CreateWeaponRequest } from '../../domain/requests/CreateWeaponRequest';
import { UpdateWeaponRequest } from '../../domain/requests/UpdateWeaponRequest';
import { CreateWeaponCommand } from '../../application/CreateWeapon/CreateWeapon.command';
import { GetWeaponCommand } from '../../application/GetWeapon/GetWeapon.command';
import { UpdateWeaponCommand } from '../../application/UpdateWeapon/UpdateWeapon.command';
import { DeleteWeaponCommand } from '../../application/DeleteWeapon/DeleteWeapon.command';
import { GetWeaponQuery } from '../../domain/requests/GetWeaponQuery';
import { GetWeaponListCommand } from '../../application/GetWeaponList/GetWeaponList.command';
import { ApiTags } from '@nestjs/swagger';
import { GetWeaponCraftingMaterialsCommand } from '../../application/GetCraftingMaterials/GetCraftingMaterials.command';
import { AddWeaponCraftingMaterialsRequest } from '../../domain/requests/AddWeaponCraftingMaterialsRequest';
import { AddWeaponCraftingMaterialsCommand } from '../../application/AddCraftingMaterials/AddCraftingMaterials.command';

@ApiTags('Weapons')
@Controller('weapons')
export class WeaponsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: CreateWeaponRequest) {
    return this.commandBus.execute(
      new CreateWeaponCommand(
        request.name,
        request.branch,
        request.weaponType,
        request.monster,
        request.previousWeaponId,
        request.defense,
        request.damageOne,
        request.damageTwo,
        request.damageThree,
        request.damageFour,
        request.damageFive
      )
    );
  }

  @Get(':weaponId/crafting-materials')
  @HttpCode(HttpStatus.CREATED)
  GetCraftingMaterials(
    @Param('weaponId', ParseUUIDPipe) weaponId: string
  ) {
    return this.commandBus.execute(
      new GetWeaponCraftingMaterialsCommand(
        weaponId
      )
    );
  }

  @Post(':weaponId/crafting-materials')
  @HttpCode(HttpStatus.CREATED)
  AddCraftingMaterials(
    @Param('weaponId', ParseUUIDPipe) weaponId: string,
    @Body() request: AddWeaponCraftingMaterialsRequest
  ) {
    return this.commandBus.execute(
      new AddWeaponCraftingMaterialsCommand(
        weaponId,
        request.craftingMaterialList
      )
    );
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: GetWeaponQuery) {
    return this.commandBus.execute(new GetWeaponListCommand(query));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetWeaponCommand(id));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateWeaponRequest
  ) {
    return this.commandBus.execute(
      new UpdateWeaponCommand(
        id,
        request.name,
        request.branch,
        request.weaponType,
        request.monster,
        request.previousWeaponId,
        request.defense,
        request.damageOne,
        request.damageTwo,
        request.damageThree,
        request.damageFour,
        request.damageFive
      )
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteWeaponCommand(id));
  }
}
