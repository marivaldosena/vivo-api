import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    Query,
    ValidationPipe, Param,
} from '@nestjs/common';
import { BotsService } from './bots.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { BotResultDto } from './dto/bot-result.dto';
import { GetBotsFilterDto } from './dto/get-bots-filter.dto';

@Controller('bots')
export class BotsController {
    constructor(
        private botsService: BotsService,
    ) {}

    @Get()
    async getBots(
      @Query(ValidationPipe) botsFilterDto: GetBotsFilterDto
    ): Promise<BotResultDto[]> {
        return await this.botsService.getBots(botsFilterDto);
    }

    @Get('/:id')
    async getBotById(
      @Param('id') id: string
    ): Promise<BotResultDto> {
        return await this.botsService.getBotById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async createBot(@Body() createBotDto: CreateBotDto): Promise<BotResultDto> {
        return await this.botsService.createBot(createBotDto);
    }
}
