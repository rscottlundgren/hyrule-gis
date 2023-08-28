import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsController } from './materials.controller';
import { MaterialsService } from './materials.service';
import { Material } from './entities/material.entity';
import { UniqueCookingEffectsModule } from 'src/unique-cooking-effects/unique-cooking-effects.module';
import { CommonLocationsModule } from '../common-locations/common-locations.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Material]),
    UniqueCookingEffectsModule,
    CommonLocationsModule,
  ],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {}
