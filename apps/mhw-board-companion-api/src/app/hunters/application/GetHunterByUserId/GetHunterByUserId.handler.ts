import { Inject, NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import { HunterRepository, HUNTER_REPOSITORY } from '../../domain/repository/HuntersRepository';
import { GetHunterByUserIdCommand } from './GetHunterByUserId.command';
import { HunterMapper } from '../../infrastructure/repository/HunterMapper';

@CommandHandler(GetHunterByUserIdCommand)
export class GetHunterByUserIdHandler
  implements ICommandHandler<GetHunterByUserIdCommand>
{
  constructor(
    @Inject(HUNTER_REPOSITORY) private hunterRepository: HunterRepository,
    private hunterMapper: HunterMapper
  ) {}

  async execute(command: GetHunterByUserIdCommand) {
    const hunter = await this.hunterRepository.findByUserId(command.userId);

    if (!hunter) {
      throw new NotFoundException(`The user ${command.userId} not has hunter associated yet.`);
    }

    return this.hunterMapper.fromEntity(hunter);
  }
}
