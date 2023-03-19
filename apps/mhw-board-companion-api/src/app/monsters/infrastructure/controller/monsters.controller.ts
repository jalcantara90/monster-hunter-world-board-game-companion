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

import { CreateMonsterRequest } from '../../domain/requests/CreateMonsterRequest';
import { UpdateMonsterRequest } from '../../domain/requests/UpdateMonsterRequest';
import { CreateMonsterCommand } from '../../application/CreateMonster/CreateMonster.command';
import { GetMonsterCommand } from '../../application/GetMonster/GetMonster.command';
import { UpdateMonsterCommand } from '../../application/UpdateMonster/UpdateMonster.command';
import { DeleteMonsterCommand } from '../../application/DeleteMonster/DeleteMonster.command';
import { GetMaterialsQuery } from '../../../materials/domain/requests/GetMaterialsQuery';
import { GetMonsterListCommand } from '../../application/GetMonsterList/GetMonsterList.command';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Monsters')
@Controller('monsters')
export class MonstersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: CreateMonsterRequest) {
    return this.commandBus.execute(
      new CreateMonsterCommand(request.name, request.difficulty)
    );
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: GetMaterialsQuery) {
    return this.commandBus.execute(new GetMonsterListCommand(query));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetMonsterCommand(id));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateMonsterRequest
  ) {
    return this.commandBus.execute(new UpdateMonsterCommand(id, request.name));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteMonsterCommand(id));
  }
}
