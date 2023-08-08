import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Modules
import { CommonLocationsModule } from './common-locations/common-locations.module';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { MaterialsModule } from './materials/materials.module';
import { UniqueCookingEffectsModule } from './unique-cooking-effects/unique-cooking-effects.module';
import { UsersModule } from './users/users.module';

// Entities
import { CommonLocation } from './common-locations/entities/common-location.entity';
import { Coordinate } from './coordinates/entities/coordinate.entity';
import { Material } from './materials/entities/material.entity';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [CommonLocation, Coordinate, Material, User],
      synchronize: true,
    }),
    UsersModule,
    CoordinatesModule,
    MaterialsModule,
    CommonLocationsModule,
    UniqueCookingEffectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
