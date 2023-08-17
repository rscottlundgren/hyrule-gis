import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { UniqueCookingEffect } from '../../unique-cooking-effects/entities/unique-cooking-effect.entity';

export class UpdateMaterialDto {
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @IsString()
  @IsOptional()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumber()
  @IsOptional()
  readonly fuse_attack_power: number;

  @IsNumber()
  @IsOptional()
  readonly hearts_recovered: number;

  @IsString()
  @IsOptional()
  readonly unique_cooking_effect: UniqueCookingEffect;

  @IsString({ each: true })
  @IsOptional()
  readonly common_locations: string[];

  @IsBoolean()
  @IsOptional()
  readonly tradeable: boolean;
}
