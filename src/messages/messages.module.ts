import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageRepository } from './messageRepository';

@Module({
  imports: [
    TypeOrmModule.forFeature([MessageRepository]),
  ],
  providers: [MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule {}
