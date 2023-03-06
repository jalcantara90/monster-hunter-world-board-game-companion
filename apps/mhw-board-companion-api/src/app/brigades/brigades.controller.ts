import { CreateBrigadeCommand } from '@application/brigades/CreateBrigade/CreateBrigade.command';
import { GetBrigadeByIdCommand } from '@application/brigades/GetBrigadeById/GetBrigadeById.command';
import { CreateBrigadeRequest } from '@domain/brigades/requests/CreateBrigadeRequest';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Controller('brigades')
export class BrigadesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() request: CreateBrigadeRequest) {
    return this.commandBus.execute(new CreateBrigadeCommand(request));
  }

  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetBrigadeByIdCommand(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBrigadeDto: unknown) {}

  @Delete(':id')
  remove(@Param('id') id: string) {}
}
