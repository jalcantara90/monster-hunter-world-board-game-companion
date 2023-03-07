import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BrigadeEntity } from '@infra/entities/Brigade.entity';
import { BrigadeResponse } from '@domain/brigades/responses/BrigadeResponse';

import { UpdateBrigadeByIdCommand } from './UpdateBrigadeById.command';

@CommandHandler(UpdateBrigadeByIdCommand)
export class UpdateBrigadeByIdHandler
  implements ICommandHandler<UpdateBrigadeByIdCommand>
{
  constructor(
    @InjectRepository(BrigadeEntity)
    private brigadeRepository: Repository<BrigadeEntity>
  ) {}

  async execute(command: UpdateBrigadeByIdCommand) {
    await this.brigadeRepository.update(command.id, { name: command.name });
    const brigadeEntity = await this.brigadeRepository.findOneBy({ id: command.id });

    return new BrigadeResponse(brigadeEntity.id, brigadeEntity.name);
  }
}
