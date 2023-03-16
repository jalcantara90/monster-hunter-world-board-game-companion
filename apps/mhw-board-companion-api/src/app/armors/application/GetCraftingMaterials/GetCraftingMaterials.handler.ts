import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ArmorCraftingRepository, ARMOR_CRAFTING_REPOSITORY } from '../../domain/repository/ArmorCraftingRepository';
import { GetCraftingMaterialsCommand } from './GetCraftingMaterials.command';

@CommandHandler(GetCraftingMaterialsCommand)
export class GetCraftingMaterialArmorHandler implements ICommandHandler<GetCraftingMaterialsCommand> {
  constructor(
    @Inject(ARMOR_CRAFTING_REPOSITORY) private armorCraftingRepository: ArmorCraftingRepository
  ) {}

  async execute(command: GetCraftingMaterialsCommand) {
    return this.armorCraftingRepository.find(command.armorId);
  }
}
