import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    Query,
    ValidationPipe,
    Param,
    Put,
    Delete,
} from '@nestjs/common';
import { BotsService } from './bots.service';
import { CreateBotDto } from './dto/create-bot.dto';
import { BotResultDto } from './dto/bot-result.dto';
import { GetBotsFilterDto } from './dto/get-bots-filter.dto';
import { UpdateBotDto } from './dto/update-bot.dto';

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

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async updateBot(
      @Param('id') id: string,
      @Body() updateBotDto: UpdateBotDto,
    ): Promise<BotResultDto> {
        return await this.botsService.updateBot(id, updateBotDto);
    }

    @Delete('/:id')
    async deleteBot(@Param('id') id: string ): Promise<void> {
        return await this.botsService.deleteBotById(id);
    }
}
