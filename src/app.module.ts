import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { MaterialsModule } from './materials/materials.module';
import { Coordinate } from './coordinates/entities/coordinate.entity';
import { Material } from './materials/entities/material.entity';
import { User } from './users/entities/user.entity';
import { CommonLocationsModule } from './common-locations/common-locations.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Coordinate, Material, User],
      synchronize: true,
    }),
    UsersModule,
    CoordinatesModule,
    MaterialsModule,
    CommonLocationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
