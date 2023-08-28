import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonLocationsController } from './common-locations.controller';
import { CommonLocationsService } from './common-locations.service';
import { CommonLocation } from './entities/common-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommonLocation])],
  controllers: [CommonLocationsController],
  providers: [CommonLocationsService],
  exports: [CommonLocationsService],
})
export class CommonLocationsModule {}
