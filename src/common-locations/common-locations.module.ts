import { Module } from '@nestjs/common';
import { CommonLocationsController } from './common-locations.controller';
import { CommonLocationsService } from './common-locations.service';

@Module({
  controllers: [CommonLocationsController],
  providers: [CommonLocationsService]
})
export class CommonLocationsModule {}
