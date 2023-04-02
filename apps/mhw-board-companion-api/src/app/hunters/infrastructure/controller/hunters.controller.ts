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
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiTags } from '@nestjs/swagger';
import { CreateHunterCommand } from '../../application/CreateHunter/CreateHunter.command';
import { DeleteHunterByIdCommand } from '../../application/DeleteHunter/DeleteHunterById.command';
import { GetHunterByIdCommand } from '../../application/GetHunter/GetHunterById.command';
import { GetHunterListCommand } from '../../application/GetHunterList/GetHunterList.command';
import { UpdateHunterCommand } from '../../application/UpdateHunter/UpdateHunter.command';
import { CreateHunterRequest } from '../../domain/requests/CreateHunterRequest';
import { UpdateHunterRequest } from '../../domain/requests/UpdateHunterRequest';

@ApiTags('Hunters')
@Controller('hunters')
export class HuntersController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  create(@Body() request: CreateHunterRequest) {
    return this.commandBus.execute(new CreateHunterCommand(request));
  }

  @Get()
  findAll() {
    return this.commandBus.execute(new GetHunterListCommand());
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetHunterByIdCommand(id));
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateHunterRequest
  ) {
    return this.commandBus.execute(
      new UpdateHunterCommand(id, request.name, request.palicoName)
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteHunterByIdCommand(id));
  }
}
