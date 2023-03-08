import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HuntersModule } from './hunters/hunters.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrigadesModule } from './brigades/brigades.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    BrigadesModule,
    HuntersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
