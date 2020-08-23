import { IsNotEmpty } from 'class-validator';

export class UpdateBotDto {
  @IsNotEmpty()
  name: string;
}
