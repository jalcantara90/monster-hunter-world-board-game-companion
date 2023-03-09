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

import { CreateArmorRequest } from '../../domain/requests/CreateArmorRequest';
import { UpdateArmorRequest } from '../../domain/requests/UpdateArmorRequest';
import { CreateArmorCommand } from '../../application/CreateArmor/CreateArmor.command';
import { GetArmorCommand } from '../../application/GetArmor/GetArmor.command';
import { UpdateArmorCommand } from '../../application/UpdateArmor/UpdateArmor.command';
import { DeleteArmorCommand } from '../../application/DeleteArmor/DeleteArmor.command';
import { GetArmorQuery } from '../../domain/requests/GetArmorQuery';
import { GetArmorListCommand } from '../../application/GetArmorList/GetArmorList.command';

@Controller('armors')
export class ArmorsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: CreateArmorRequest) {
    return this.commandBus.execute(
      new CreateArmorCommand(
        request.name,
        request.defense,
        request.armorPiece,
        request.branch,
        request.monster,
        request.elementalDefenseType,
        request.elementalDefense
      )
    );
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: GetArmorQuery) {
    return this.commandBus.execute(new GetArmorListCommand(query));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetArmorCommand(id));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateArmorRequest
  ) {
    return this.commandBus.execute(new UpdateArmorCommand(id, request.name));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteArmorCommand(id));
  }
}
