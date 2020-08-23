import { IsNotEmpty } from 'class-validator';

export class CreateConversationDto {
  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  text: string;
}
