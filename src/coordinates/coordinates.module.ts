import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoordinatesController } from './coordinates.controller';
import { CoordinatesService } from './coordinates.service';
import { Coordinate } from './entities/coordinate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coordinate])],
  controllers: [CoordinatesController],
  providers: [CoordinatesService],
})
export class CoordinatesModule {}
