import { Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HuntersModule } from './hunters/hunters.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrigadesModule } from './brigades/brigades.module';
import { DatabaseModule } from './database/database.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { MaterialsModule } from './materials/materials.module';
import { MonstersModule } from './monsters/monsters.module';
import { ArmorsModule } from './armors/armors.module';
import { WeaponsModule } from './weapons/weapons.module';
import { InventoriesModule } from './inventories/inventories.module';
import { PotionsGateway } from './potions/potions.gateway';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    BrigadesModule,
    HuntersModule,
    CampaignsModule,
    MaterialsModule,
    MonstersModule,
    ArmorsModule,
    WeaponsModule,
    InventoriesModule,
    CqrsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PotionsGateway, Logger],
})
export class AppModule {}
