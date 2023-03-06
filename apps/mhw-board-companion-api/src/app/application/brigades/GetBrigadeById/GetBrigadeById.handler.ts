import { BrigadeResponse } from "@domain/brigades/responses/BrigadeResponse";
import { BrigadeEntity } from "@infra/entities/Brigade.entity";
import { NotFoundException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GetBrigadeByIdCommand } from "./GetBrigadeById.command";

@CommandHandler(GetBrigadeByIdCommand)
export class GetBrigadeByIdHandler implements ICommandHandler<GetBrigadeByIdCommand> {

  constructor(
    @InjectRepository(BrigadeEntity)
    private brigadeRepository: Repository<BrigadeEntity>
  ) {}

  async execute(command: GetBrigadeByIdCommand) {
    const brigadeEntity = await this.brigadeRepository.findOneBy({ id: command.id });

    if (!brigadeEntity) {
      throw new NotFoundException(`Brigade with id ${command.id} not exist`);
    }

    return new BrigadeResponse(brigadeEntity.id, brigadeEntity.name);
  }
}
