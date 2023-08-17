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
  @IsOptional()
  readonly hearts_recovered: number;

  @IsString({ each: true })
  readonly common_locations: string[];

  @IsBoolean()
  @IsOptional()
  readonly tradeable: boolean;
}
