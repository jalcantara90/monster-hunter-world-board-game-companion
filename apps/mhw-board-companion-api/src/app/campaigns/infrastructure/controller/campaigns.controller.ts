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

import { CreateCampaignRequest } from '../../domain/requests/CreateCampaignRequest';
import { UpdateCampaignRequest } from '../../domain/requests/UpdateCampaignRequest';
import { AddCampaignHuntersRequest } from '../../domain/requests/AddCampaignHunters';
import { CreateCampaignCommand } from '../../application/CreateCampaign/CreateCampaign.command';
import { GetCampaignCommand } from '../../application/GetCampaign/GetCampaign.command';
import { UpdateCampaignCommand } from '../../application/UpdateCampaign/UpdateCampaign.command';
import { DeleteCampaignCommand } from '../../application/DeleteCampaign/DeleteCampaign.command';
import { AddCampaignHuntersCommand } from '../../application/AddCampaignsHunters/AddCampaignsHunters.command';

import { GetCampaignHuntersCommand } from '../../../hunters/application/GetCampaignHunters/GetCampaignHunters.command';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Campaigns')
@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: CreateCampaignRequest) {
    return this.commandBus.execute(
      new CreateCampaignCommand(request.name, request.brigadeId)
    );
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new GetCampaignCommand(id));
  }

  @Get(':campaignId/hunters')
  @HttpCode(HttpStatus.OK)
  findCampaignHunters(@Param('campaignId', ParseUUIDPipe) campaignId: string) {
    return this.commandBus.execute(new GetCampaignHuntersCommand(campaignId));
  }

  @Post(':campaignId/hunters')
  @HttpCode(HttpStatus.CREATED)
  addCampaignHunters(
    @Param('campaignId', ParseUUIDPipe) campaignId: string,
    @Body() request: AddCampaignHuntersRequest
  ) {
    return this.commandBus.execute(
      new AddCampaignHuntersCommand(campaignId, request.huntersCampaign)
    );
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() request: UpdateCampaignRequest
  ) {
    return this.commandBus.execute(new UpdateCampaignCommand(id, request.name));
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.commandBus.execute(new DeleteCampaignCommand(id));
  }
}
