import { Logger } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { UpdateCampaignPotionsCommand } from '../campaigns/application/UpdateCampaignPotions/UpdateCampaignPotions.command';
import { UpdateCampaignPotionsRequest } from '../campaigns/domain/requests/UpdateCampaignPotionsRequest';

type WSRequest<T> = {
  message: string;
  room: string;
  payload: T;
}

@WebSocketGateway()
export class PotionsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() private server: Server;

  constructor(
    private logger: Logger,
    private readonly commandBus: CommandBus
  ) {}

  handleConnection(client: any) {
    this.logger.log(`Client connected: ${client.id}`, 'CONNECTION');
  }

  afterInit(server: any) {
    this.logger.log(server, 'INIT');
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`, 'DISCONNECTION');
  }

  @SubscribeMessage('add-potion')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: any
  ) {
    this.logger.log(payload);
    this.server.emit('POTIONS_UPDATED', { updated: true });
  }
  @SubscribeMessage('message')
  async updatePotions(
    @ConnectedSocket() client: Socket,
    @MessageBody() request: WSRequest<UpdateCampaignPotionsRequest>
  ) {
    this.logger.log(request, 'Message');
    const { payload } = request;
    const campaign = await this.commandBus.execute(
      new UpdateCampaignPotionsCommand(payload.campaignId, payload.potions)
    );

    this.server.emit('POTIONS_UPDATED', campaign);
  }
}
