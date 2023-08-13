import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMaterialDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly fuse_attack_power: number;

  @IsNumber()
  readonly hearts_recovered: number;

  @IsString()
  @IsOptional()
  readonly unique_cooking_effect: string;

  @IsString({ each: true })
  readonly common_locations: string[];

  @IsBoolean()
  readonly tradeable: boolean;
}
