import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import * as monsters from '../data/monsters';
import { MonsterEntity } from '../app/monsters/infrastructure/entity/Monster.entity';

import { MaterialEntity } from '../app/materials/infrastructure/entity/Material.entity';
import * as monsterMaterials from '../data/materials';

import * as armors from '../data/armors';
import { ArmorEntity } from '../app/armors/infrastructure/entity/Armor.entity';

import * as weapons from '../data/weapons';
import { WeaponEntity } from '../app/weapons/infrastructure/entity/Weapon.entity';

export default class EntitiesSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    const repository = connection.getRepository(MonsterEntity);

    const monsterListPromise = Object.values(monsters).map((monster) => {
      const monsterEntity = repository.create(monster);
      return repository.insert(monsterEntity);
    });

    await Promise.all(monsterListPromise);

    const materialRepository = connection.getRepository(MaterialEntity);

    const materialListPromise = Object.values(monsterMaterials).map(
      (monsterMaterial) => {
        const material = materialRepository.create(monsterMaterial);
        return materialRepository.insert(material);
      }
    );

    await Promise.all(materialListPromise);

    const armorRepository = connection.getRepository(ArmorEntity);

    const armorListPromise = Object.values(armors).map((armor) => {
      const armorEntity = armorRepository.create(armor);
      return armorRepository.insert(armorEntity);
    });

    await Promise.all(armorListPromise);

    const weaponRepository = connection.getRepository(WeaponEntity);

    for (const weapon of Object.values(weapons)) {
      const weaponEntity = weaponRepository.create(weapon);
      await weaponRepository.insert(weaponEntity);
    }
  }
}
