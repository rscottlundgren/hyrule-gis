import { IsString } from 'class-validator';

export class CreateCommonLocationDto {
  @IsString()
  name: string;
}
