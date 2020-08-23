import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetMessageFilterDto {
  @IsOptional()
  @IsNotEmpty()
  conversationId: string;

  @IsOptional()
  @IsNotEmpty()
  id: string;
}
