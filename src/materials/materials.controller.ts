import { Body, Controller, Post } from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dtos/create-material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  createMaterial(@Body() body: CreateMaterialDto) {
    return this.materialsService.create(
      body.name,
      body.description,
      body.fuse_attack_power,
      body.hearts_recovered,
      body.unique_cooking_effect,
      body.common_locations,
      body.tradeable,
    );
  }
}
