import { EntityRepository, Repository } from "typeorm";
import { Bot } from "./bot.entity";
import { CreateBotDto } from "./dto/create-bot.dto";
import { v4 as uuid } from "uuid";
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { GetBotsFilterDto } from './dto/get-bots-filter.dto';

@EntityRepository(Bot)
export class BotRepository extends Repository<Bot> {
    async createBot(createBotDto: CreateBotDto): Promise<Bot> {
        const { name } = createBotDto;

        const bot = new Bot();

        bot.name = name;
        bot.guid = uuid();

        try {
            await bot.save();
        } catch (error) {
            throw new BadRequestException();
        }
        
        return bot;
    }

    async getBots(botsFilterDto: GetBotsFilterDto): Promise<Bot[]> {
        const { name, id } = botsFilterDto;
        const query = this.createQueryBuilder('bot');

        if (name) {
            query.andWhere('bot.name = :name', { name });
        }

        if (id) {
            query.andWhere('bot.guid = :id', { id });
        }

        try {
            const bots = await query.getMany();
            return bots;
        } catch (error) {
            throw new InternalServerErrorException();
        }
    }
}
