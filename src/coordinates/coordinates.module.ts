import { Module } from '@nestjs/common';
import { CoordinatesController } from './coordinates.controller';

@Module({
  controllers: [CoordinatesController]
})
export class CoordinatesModule {}
