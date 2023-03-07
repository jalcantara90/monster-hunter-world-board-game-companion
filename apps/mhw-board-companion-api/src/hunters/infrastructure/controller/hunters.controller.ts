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
import { CreateHunterCommand } from '../../application/CreateHunter/CreateHunter.command';
import { UpdateHunterCommand } from '../../application/UpdateHunter/UpdateHunter.command';
import { CreateHunterRequest } from '../../domain/requests/CreateHunterRequest';
import { UpdateHunterRequest } from '../../domain/requests/UpdateHunterRequest';

@Controller('hunters')
export class HuntersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() request: CreateHunterRequest) {
    return this.commandBus.execute(new CreateHunterCommand(request));
  }

  // @Get()
  // findAll() {
  //   return this.huntersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.huntersService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() request: UpdateHunterRequest) {
    return this.commandBus.execute(new UpdateHunterCommand(id, request.name, request.palicoName));
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.huntersService.remove(+id);
  // }
}
