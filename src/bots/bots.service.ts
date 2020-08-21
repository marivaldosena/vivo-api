import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bot } from './bot.entity';
import { BotRepository } from './bot.repository';
import { CreateBotDto } from './dto/create-bot.dto';
import { BotResultDto } from './dto/bot-result.dto';
import { GetBotsFilterDto } from './dto/get-bots-filter.dto';

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

    async getBots(botsFilterDto: GetBotsFilterDto): Promise<BotResultDto[]> {
        const bots = await this.botRepository.getBots(botsFilterDto);
        const botsResult: BotResultDto[] = [];

        bots.forEach(bot => {
           botsResult.push({
              id: bot.guid,
              name: bot.name,
           });
        });

        return botsResult;
    }

    async getBotById(id: string): Promise<BotResultDto> {
        const bot = await this.botRepository.findOne({ guid: id });
        const botResult: BotResultDto = {
            id: bot.guid,
            name: bot.name
        };

        return botResult;
    }
}
