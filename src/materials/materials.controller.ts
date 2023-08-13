import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dtos/create-material.dto';
import { UpdateMaterialDto } from './dtos/update-material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  createMaterial(@Body() body: CreateMaterialDto) {
    return this.materialsService.create(
      body.id,
      body.name,
      body.description,
      body.fuse_attack_power,
      body.hearts_recovered,
      body.unique_cooking_effect,
      body.common_locations,
      body.tradeable,
    );
  }

  @Get()
  findAllMaterials() {
    return this.materialsService.find();
  }

  @Get(':/id')
  findMaterial(@Param('id') id: string) {
    return this.materialsService.findOne(parseInt(id));
  }

  @Patch('/:id')
  updateMaterial(@Param('id') id: string, @Body() body: UpdateMaterialDto) {
    return this.materialsService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeMaterial(@Param('id') id: string) {
    return this.materialsService.remove(parseInt(id));
  }
}
