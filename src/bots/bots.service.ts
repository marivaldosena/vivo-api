import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bot } from './bot.entity';
import { BotRepository } from './bot.repository';
import { CreateBotDto } from './dto/create-bot.dto';
import { BotResultDto } from './dto/bot-result.dto';

@Injectable()
export class BotsService {
    constructor(
        @InjectRepository(BotRepository)
        private botRepository: BotRepository,
    ) {}

    async createBot(createBotDto: CreateBotDto): Promise<BotResultDto> {
        const bot = await this.botRepository.createBot(createBotDto);

        const botResult = new BotResultDto();
        botResult.name = bot.name;
        botResult.id = bot.guid;

        return botResult;
    }
}
