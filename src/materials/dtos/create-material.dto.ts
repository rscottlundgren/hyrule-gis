import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsNumber()
  readonly fuse_attack_power: number;

  @IsNumber()
  readonly hearts_recovered: number;

  @IsNumber()
  readonly unique_cooking_effect: number;

  @IsNumber({ allowInfinity: false, allowNaN: false }, { each: true })
  readonly common_location: number[];

  @IsBoolean()
  readonly tradeable: boolean;
}
