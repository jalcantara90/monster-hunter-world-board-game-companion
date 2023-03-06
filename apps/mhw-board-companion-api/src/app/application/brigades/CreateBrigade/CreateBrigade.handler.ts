import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BrigadeEntity } from '@infra/entities/Brigade.entity';
import { BrigadeResponse } from '@domain/brigades/responses/BrigadeResponse';

import { CreateBrigadeCommand } from './CreateBrigade.command';

@CommandHandler(CreateBrigadeCommand)
export class CreateBrigadeHandler
  implements ICommandHandler<CreateBrigadeCommand>
{
  constructor(
    @InjectRepository(BrigadeEntity)
    private brigadeRepository: Repository<BrigadeEntity>
  ) {}

  async execute(command: CreateBrigadeCommand) {
    const brigade = this.brigadeRepository.create(command.request);
    const brigadeEntity = await this.brigadeRepository.save(brigade);

    return new BrigadeResponse(brigadeEntity.id, brigadeEntity.name);
  }
}
