import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Bot } from './bot.entity';
import { BotsService } from './bots.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { BotResultDto } from './dto/bot-result.dto';

@Controller('bots')
export class BotsController {
    constructor(
        private botsService: BotsService,
    ) {}

    @Post()
    @UsePipes(ValidationPipe)
    async createBot(@Body() createBotDto: CreateBotDto): Promise<BotResultDto> {
        return await this.botsService.createBot(createBotDto);
    }
}
