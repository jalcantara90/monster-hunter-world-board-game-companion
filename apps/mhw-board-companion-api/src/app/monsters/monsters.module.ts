import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { monsterProviders } from './monsters.providers';
import { MonsterEntity } from './infrastructure/entity/Monster.entity';
import { MonstersController } from './infrastructure/controller/monsters.controller';
import { CreateMonsterHandler } from './application/CreateMonster/CreateMonster.handler';
import { GetMonsterHandler } from './application/GetMonster/GetMonster.handler';
import { DeleteMonsterHandler } from './application/DeleteMonster/DeleteMonster.handler';
import { UpdateMonsterHandler } from './application/UpdateMonster/UpdateMonster.handler';
import { GetMonsterListHandler } from './application/GetMonsterList/GetMonsterList.handler';

const commandHandlers = [
  CreateMonsterHandler,
  GetMonsterHandler,
  UpdateMonsterHandler,
  DeleteMonsterHandler,
  GetMonsterListHandler
];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([MonsterEntity])],
  controllers: [MonstersController],
  providers: [...commandHandlers, ...monsterProviders],
})
export class MonstersModule {}
