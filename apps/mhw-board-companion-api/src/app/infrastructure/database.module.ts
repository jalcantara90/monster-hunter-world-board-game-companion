import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArmorEntity } from './entities/Armor.entity';
import { BrigadeEntity } from './entities/Brigade.entity';
import { CampaignEntity } from './entities/Campaign.entity';
import { CampaignHunterEntity } from './entities/CampaignHunter.entity';
import { CraftingMaterialEntity } from './entities/CraftMaterial.entity';
import { HunterEntity } from './entities/Hunter.entity';
import { InventoryEntity } from './entities/Inventory.entity';
import { MaterialEntity } from './entities/Material.entity';
import { SupplyEntity } from './entities/Supply.entity';
import { WeaponEntity } from './entities/Weapon.entity';
import { WeaponCardEntity } from './entities/WeaponCards.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
      entities: [
        ArmorEntity,
        BrigadeEntity,
        CampaignEntity,
        CampaignHunterEntity,
        CraftingMaterialEntity,
        HunterEntity,
        InventoryEntity,
        MaterialEntity,
        SupplyEntity,
        WeaponEntity,
        WeaponCardEntity
      ]
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
