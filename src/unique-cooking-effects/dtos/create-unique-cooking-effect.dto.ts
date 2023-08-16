import { IsString } from 'class-validator';
import { Material } from '../../materials/entities/material.entity';

export class CreateUniqueCookingEffectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  materials: Material[];
}
