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

import { CreateBrigadeRequest } from '../../domain/requests/CreateBrigadeRequest';
import { UpdateBrigadeRequest } from '../../domain/requests/UpdateBrigadeRequest';
import { CreateBrigadeCommand } from '../../application/CreateBrigade/CreateBrigade.command';
import { GetBrigadeByIdCommand } from '../../application/GetBrigadeById/GetBrigadeById.command';
import { UpdateBrigadeByIdCommand } from '../../application/UpdateBrigadeById/UpdateBrigadeById.command';
import { DeleteBrigadeByIdCommand } from '../../application/DeleteBrigadeById/DeleteBrigadeById.command';

import { GetCampaignListByBrigadeIdCommand } from '../../../campaigns/application/GetCampaignListByBrigadeId/GetCampaignListByBrigadeId.command';
import { ApiTags } from '@nestjs/swagger';
import { GetAllBrigadesCommad } from '../../application/GetAllBrigades/GetAllBrigades.commnad';

@ApiTags('Brigades')
@Controller('brigades')
export class BrigadesController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: CreateBrigadeRequest) {
    return this.commandBus.execute(new CreateBrigadeCommand(request.name));
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.commandBus.execute(new GetAllBrigadesCommad());
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetBrigadeByIdCommand(id));
  }

  @Get(':brigadeId/campaigns')
  @HttpCode(HttpStatus.OK)
  findAllCampaigns(@Param('brigadeId', ParseUUIDPipe) brigadeId: string) {
    return this.commandBus.execute(
      new GetCampaignListByBrigadeIdCommand(brigadeId)
    );
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateBrigadeRequest
  ) {
    return this.commandBus.execute(
      new UpdateBrigadeByIdCommand(id, request.name)
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteBrigadeByIdCommand(id));
  }
}
