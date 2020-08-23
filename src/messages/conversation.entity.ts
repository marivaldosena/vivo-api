import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Message } from './message.entity';

@Entity()
export class Conversation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  guid: string;

  @OneToMany(type => Message, message => message.conversation, { eager: true })
  messages: Message[];
}
