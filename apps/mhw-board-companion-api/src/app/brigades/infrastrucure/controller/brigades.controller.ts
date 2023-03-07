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
} from '@nestjs/common';
import { HttpStatusCode } from 'axios';
import { CommandBus } from '@nestjs/cqrs';

import { CreateBrigadeRequest } from '../../domain/requests/CreateBrigadeRequest';
import { UpdateBrigadeRequest } from '../../domain/requests/UpdateBrigadeRequest';
import { CreateBrigadeCommand } from '../../application/CreateBrigade/CreateBrigade.command';
import { GetBrigadeByIdCommand } from '../../application/GetBrigadeById/GetBrigadeById.command';
import { UpdateBrigadeByIdCommand } from '../../application/UpdateBrigadeById/UpdateBrigadeById.command';
import { DeleteBrigadeByIdCommand } from '../../application/DeleteBrigadeById/DeleteBrigadeById.command';

@Controller('brigades')
export class BrigadesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatusCode.Created)
  create(@Body() request: CreateBrigadeRequest) {
    return this.commandBus.execute(new CreateBrigadeCommand(request.name));
  }

  @Get(':id')
  @HttpCode(HttpStatusCode.Ok)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetBrigadeByIdCommand(id));
  }

  @Patch(':id')
  @HttpCode(HttpStatusCode.Ok)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateBrigadeRequest
  ) {
    return this.commandBus.execute(
      new UpdateBrigadeByIdCommand(id, request.name)
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatusCode.NoContent)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteBrigadeByIdCommand(id));
  }
}
