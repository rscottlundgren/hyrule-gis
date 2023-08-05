import { IsString, IsOptional } from 'class-validator';

export class UpdateCommonLocationDto {
  @IsString()
  @IsOptional()
  name: string;
}
