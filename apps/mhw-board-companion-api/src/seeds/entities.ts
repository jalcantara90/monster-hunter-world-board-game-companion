import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import * as monsters from '../data/monsters';
import { MonsterEntity } from '../app/monsters/infrastructure/entity/Monster.entity';

import { MaterialEntity } from '../app/materials/infrastructure/entity/Material.entity';
import * as monsterMaterials from '../data/materials';

import * as armors from '../data/armors';
import { ArmorEntity, ArmorCraftingEntity } from '../app/armors/infrastructure/entity/Armor.entity';

import * as weapons from '../data/weapons';
import {
  WeaponCraftingEntity,
  WeaponEntity,
} from '../app/weapons/infrastructure/entity/Weapon.entity';

export default class EntitiesSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await this.seedMonster(connection);
    await this.seedMaterials(connection);
    await this.seedArmors(connection);
    await this.seedWeapons(connection);
  }

  private async seedMaterials(connection: Connection) {
    const materialRepository = connection.getRepository(MaterialEntity);

    const materialListPromise = Object.values(monsterMaterials).map(
      (monsterMaterial) => {
        const material = materialRepository.create(monsterMaterial);
        return materialRepository.insert(material);
      }
    );

    await Promise.all(materialListPromise);
  }

  private async seedMonster(connection: Connection) {
    const repository = connection.getRepository(MonsterEntity);

    const monsterListPromise = Object.values(monsters).map((monster) => {
      const monsterEntity = repository.create(monster);
      return repository.insert(monsterEntity);
    });

    await Promise.all(monsterListPromise);
  }

  private async seedArmors(connection: Connection) {
    const armorRepository = connection.getRepository(ArmorEntity);
    const armorCraftingRepository = connection.getRepository(ArmorCraftingEntity);

    for (const armor of Object.values(armors)) {
      const { materials, ...armorData } = armor;
      const armorEntity = armorRepository.create(armorData);
      await armorRepository.insert(armorEntity);

      if (materials?.length) {
        const materialPromise = materials.map((material) => {
          const armorCraftingMaterialEntity = armorCraftingRepository.create({
            materialId: material.materialId,
            armorId: armor.id,
            quantity: material.quantity,
          });
          return armorCraftingRepository.insert(armorCraftingMaterialEntity);
        });
        await Promise.all(materialPromise);
      }
    }
  }

  private async seedWeapons(connection: Connection) {
    const weaponRepository = connection.getRepository(WeaponEntity);
    const weaponCraftingRepository =
      connection.getRepository(WeaponCraftingEntity);

    for (const weapon of Object.values(weapons)) {
      const { materials, ...weaponData } = weapon;
      const weaponEntity = weaponRepository.create(weaponData);
      await weaponRepository.insert(weaponEntity);

      if (materials?.length) {
        const materialPromise = materials.map((material) => {
          const weaponCraftingMaterialEntity = weaponCraftingRepository.create({
            materialId: material.materialId,
            weaponId: weapon.id,
            quantity: material.quantity,
          });
          return weaponCraftingRepository.insert(weaponCraftingMaterialEntity);
        });
        await Promise.all(materialPromise);
      }
    }
  }
}
