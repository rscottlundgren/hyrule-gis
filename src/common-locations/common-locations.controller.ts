import { Body, Controller, Post } from '@nestjs/common';
import { CreateCommonLocationDto } from './dtos/create-common-location.dto';
import { CommonLocationsService } from './common-locations.service';

@Controller('common-locations')
export class CommonLocationsController {
  constructor(
    private readonly commonLocationsService: CommonLocationsService,
  ) {}

  @Post()
  createCommonLocation(@Body() body: CreateCommonLocationDto) {
    this.commonLocationsService.create(body.name);
  }
}
