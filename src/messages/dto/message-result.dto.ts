export class MessageResultDto {
  id?: string;
  conversationId: string;
  timestamp: Date;
  from: string;
  to: string;
  text: string;
}
