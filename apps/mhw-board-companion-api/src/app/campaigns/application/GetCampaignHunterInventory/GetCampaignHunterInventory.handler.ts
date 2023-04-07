import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ArmorEntity } from '../../../armors/infrastructure/entity/Armor.entity';
import { ArmorMapper } from '../../../armors/infrastructure/repository/ArmorMapper';
import {
  InventoryRepository,
  INVENTORY_REPOSITORY,
} from '../../../inventories/domain/repository/InventoryRepository';
import { MaterialEntity } from '../../../materials/infrastructure/entity/Material.entity';
import { MaterialMapper } from '../../../materials/infrastructure/repository/MaterialMapper';
import { WeaponEntity } from '../../../weapons/infrastructure/entity/Weapon.entity';
import { WeaponMapper } from '../../../weapons/infrastructure/repository/WeaponMapper';
import {
  CampaignHuntersRepository,
  CAMPAIGN_HUNTERS_REPOSITORY,
} from '../../domain/repository/CampaignHuntersRepository';

import { GetCampaignHunterInventoryCommand } from './GetCampaignHunterInventory.command';

@CommandHandler(GetCampaignHunterInventoryCommand)
export class GetCampaignListByBrigadeIdCommandHandler
  implements ICommandHandler<GetCampaignHunterInventoryCommand>
{
  constructor(
    @Inject(INVENTORY_REPOSITORY)
    private inventoryRepository: InventoryRepository,
    @Inject(CAMPAIGN_HUNTERS_REPOSITORY)
    private campaignHuntersRespository: CampaignHuntersRepository,
    private materialMapper: MaterialMapper,
    private weaponMapper: WeaponMapper,
    private armorMapper: ArmorMapper
  ) {}

  async execute(command: GetCampaignHunterInventoryCommand) {
    const inventory = await this.inventoryRepository.findByCampaignAndHunterId(
      command
    );

    const inventoryMaterials = await this.inventoryRepository.findAllMaterials(
      inventory.id
    );

    const campaignHunter =
      await this.campaignHuntersRespository.getCampaignHunter(
        command.campaignId,
        command.hunterId
      );

    const response = {
      inventoryId: inventory.id,
      weaponType: campaignHunter.weaponType,
      commonMaterials: inventoryMaterials
        .filter(
          (item) => item.material && (item.material as MaterialEntity).isCommon
        )
        .map((item) => ({
          ...this.materialMapper.fromEntity(item.material as MaterialEntity),
          id: item.id,
          quantity: item.quantity,
        })),
      otherMaterials: inventoryMaterials
        .filter(
          (item) => item.material && !(item.material as MaterialEntity).isCommon
        )
        .map((item) => ({
          ...this.materialMapper.fromEntity(item.material as MaterialEntity),
          quantity: item.quantity,
          id: item.id,
        })),
      weapons: inventoryMaterials
        .filter((item) => item.weapon)
        .map((item) =>
          this.weaponMapper.fromEntity(item.weapon as WeaponEntity)
        ),
      armors: inventoryMaterials
        .filter((item) => item.armor)
        .map((item) => this.armorMapper.fromEntity(item.armor as ArmorEntity)),
    };

    return response;
  }
}
