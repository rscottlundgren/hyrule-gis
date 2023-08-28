import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

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
  readonly unique_cooking_effect: string;

  @IsString({ each: true })
  @IsOptional()
  readonly common_locations: string[];

  @IsBoolean()
  @IsOptional()
  readonly tradeable: boolean;
}
