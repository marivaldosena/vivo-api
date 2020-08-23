import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageResultDto } from './dto/message-result.dto';
import { CreateConversationDto } from './dto/create-conversation.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createConversation(
    @Body() createConversationDto: CreateConversationDto,
  ): Promise<MessageResultDto> {
    return await this.messagesService.createConversation(createConversationDto);
  }
}
