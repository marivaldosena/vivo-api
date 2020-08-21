import { Module } from '@nestjs/common';
import { BotsService } from './bots.service';
import { BotsController } from './bots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotRepository } from './bot.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([BotRepository]),
  ],
  providers: [BotsService],
  controllers: [BotsController]
})
export class BotsModule {}
