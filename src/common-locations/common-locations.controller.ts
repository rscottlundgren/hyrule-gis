import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommonLocationsService } from './common-locations.service';
import { CreateCommonLocationDto } from './dtos/create-common-location.dto';
import { UpdateCommonLocationDto } from './dtos/update-common-location.dto';

@Controller('common-locations')
export class CommonLocationsController {
  constructor(
    private readonly commonLocationsService: CommonLocationsService,
  ) {}

  @Post()
  createCommonLocation(@Body() body: CreateCommonLocationDto) {
    return this.commonLocationsService.create(body.name);
  }

  @Get()
  findAllCommonLocations() {
    return this.commonLocationsService.find();
  }

  @Get('/:id')
  findCommonLocation(@Param('id') id: string) {
    return this.commonLocationsService.findOne(parseInt(id));
  }

  @Patch('/:id')
  updateCommonLocation(
    @Param('id') id: string,
    @Body() body: UpdateCommonLocationDto,
  ) {
    return this.commonLocationsService.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeCommonLocation(@Param('id') id: string) {
    return this.commonLocationsService.remove(parseInt(id));
  }
}
