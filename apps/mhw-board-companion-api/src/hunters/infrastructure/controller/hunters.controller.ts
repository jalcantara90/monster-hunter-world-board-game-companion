import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateHunterCommand } from '../../application/CreateHunter/CreateHunter.command';
import { CreateHunterRequest } from '../../domain/requests/CreateHunterRequest';

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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateHunterDto: UpdateHunterDto) {
  //   return this.huntersService.update(+id, updateHunterDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.huntersService.remove(+id);
  // }
}
