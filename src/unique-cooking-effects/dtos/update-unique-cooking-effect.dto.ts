import { IsString, IsOptional } from 'class-validator';

export class UpdateUniqueCookingEffectDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;
}
