import { EntityRepository, Repository } from "typeorm";
import { Bot } from "./bot.entity";
import { CreateBotDto } from "./dto/create-bot.dto";
import { v4 as uuid } from "uuid";
import { BadRequestException } from "@nestjs/common";

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
}
