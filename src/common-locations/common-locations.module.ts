import { Module } from '@nestjs/common';
import { CommonLocationsController } from './common-locations.controller';

@Module({
  controllers: [CommonLocationsController]
})
export class CommonLocationsModule {}
