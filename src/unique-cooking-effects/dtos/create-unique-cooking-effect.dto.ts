import { IsString } from 'class-validator';

export class CreateUniqueCookingEffectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
