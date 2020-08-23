import { Repository, EntityRepository } from 'typeorm';
import { Message } from './message.entity';
import { CreateConversationDto } from './dto/create-conversation.dto';
import { MessageResultDto } from './dto/message-result.dto';
import { Conversation } from './conversation.entity';
import { v4 as uuid } from 'uuid';
import { InternalServerErrorException } from '@nestjs/common';
import { Bot } from '../bots/bot.entity';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
  async createConversation(createConversationDto: CreateConversationDto): Promise<Message> {
    const { from, text } = createConversationDto;

    //try {
      const conversation = new Conversation();
      const bot = await Bot.getAvailableBot();

      conversation.guid = uuid();
      await conversation.save();

      const message: Message = new Message();

      message.conversationId = conversation.id;
      message.timestamp = new Date();
        botId: bot.id,
        guid: uuid(),
        to: bot.guid,
        from,
        text,
        conversation,
      };



      return message;
    //} catch (error) {
    //  throw new InternalServerErrorException();
    //}
  }
}
