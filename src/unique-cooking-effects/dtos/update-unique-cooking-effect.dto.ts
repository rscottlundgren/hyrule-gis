import { IsString, IsOptional } from 'class-validator';
import { Material } from '../../materials/entities/material.entity';

export class UpdateUniqueCookingEffectDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  materials: Material[];
}
