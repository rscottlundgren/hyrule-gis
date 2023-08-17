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
import { UpdateMaterialDto } from './dtos/update-material.dto';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Post()
  createMaterial(
    @Body('id') id: number,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('fuse_attack_power') fuse_attack_power: number,
    @Body('hearts_recovered') hearts_recovered: number,
    @Body('common_locations') common_locations: string[],
    @Body('tradeable') tradeable: boolean,
    @Body('unique_cooking_effect') unique_cooking_effect: string,
  ) {
    return this.materialsService.create(
      id,
      name,
      description,
      fuse_attack_power,
      hearts_recovered,
      common_locations,
      tradeable,
      unique_cooking_effect,
    );
  }

  @Get()
  findAllMaterials() {
    return this.materialsService.find();
  }

  @Get('/:id')
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
