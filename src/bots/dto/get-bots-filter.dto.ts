import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetBotsFilterDto {
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  id: string;
}
