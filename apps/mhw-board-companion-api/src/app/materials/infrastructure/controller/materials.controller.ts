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

import { CreateMaterialRequest } from '../../domain/requests/CreateMaterialRequest';
import { UpdateMaterialRequest } from '../../domain/requests/UpdateMaterialRequest';
import { CreateMaterialCommand } from '../../application/CreateMaterial/CreateMaterial.command';
import { GetMaterialCommand } from '../../application/GetMaterial/GetMaterial.command';
import { UpdateMaterialCommand } from '../../application/UpdateMaterial/UpdateMaterial.command';
import { DeleteMaterialCommand } from '../../application/DeleteMaterial/DeleteMaterial.command';
import { GetMaterialsQuery } from '../../domain/requests/GetMaterialsQuery';
import { GetMaterialListCommand } from '../../application/GetMaterialList/GetMaterialList.command';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Materials')
@Controller('materials')
export class MaterialsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: CreateMaterialRequest) {
    return this.commandBus.execute(new CreateMaterialCommand(request));
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(@Query() query: GetMaterialsQuery) {
    return this.commandBus.execute(new GetMaterialListCommand(query));
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetMaterialCommand(id));
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateMaterialRequest
  ) {
    return this.commandBus.execute(new UpdateMaterialCommand(id, request.name));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteMaterialCommand(id));
  }
}
