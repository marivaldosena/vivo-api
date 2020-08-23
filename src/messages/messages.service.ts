import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageRepository } from './messageRepository';
import { MessageResultDto } from './dto/message-result.dto';
import { CreateConversationDto } from './dto/create-conversation.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(MessageRepository)
    private messageRepository: MessageRepository,
  ) {}

  async createConversation(createConversationDto: CreateConversationDto): Promise<MessageResultDto> {
    const message = await this.messageRepository.createConversation(createConversationDto);
    const messageResult: MessageResultDto = {
      id: message.guid,
      conversationId: message.conversation.guid,
      from: message.from,
      to: message.to,
      text: message.text,
      timestamp: message.timestamp,
    };

    return messageResult
  }
}
