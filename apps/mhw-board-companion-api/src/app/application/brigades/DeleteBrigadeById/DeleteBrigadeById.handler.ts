import { BrigadeEntity } from '@infra/entities/Brigade.entity';
import { NotFoundException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeleteBrigadeByIdCommand } from './DeleteBrigadeById.command';

@CommandHandler(DeleteBrigadeByIdCommand)
export class DeleteBrigadeByIdHandler
  implements ICommandHandler<DeleteBrigadeByIdCommand>
{
  constructor(
    @InjectRepository(BrigadeEntity)
    private brigadeRepository: Repository<BrigadeEntity>
  ) {}

  async execute(command: DeleteBrigadeByIdCommand) {
    const brigadeEntity = await this.brigadeRepository.findOneBy({
      id: command.id,
    });

    if (!brigadeEntity) {
      throw new NotFoundException(`Brigade with id ${command.id} not exist`);
    }

    await this.brigadeRepository.update(command.id, { isActive: false });
  }
}
