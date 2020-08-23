import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Conversation } from './conversation.entity';

@Entity()
export class Message extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  guid: string;

  @Column()
  timestamp: Date

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  text: string;

  @Column()
  botId: number;

  @Column()
  conversationId: number;

  @ManyToOne(type => Conversation, conversation => conversation.messages, { eager: false })
  conversation: Conversation;
}
