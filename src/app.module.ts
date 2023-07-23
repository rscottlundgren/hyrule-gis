import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoordinatesModule } from './coordinates/coordinates.module';
import { MaterialsModule } from './materials/materials.module';

@Module({
  imports: [UsersModule, CoordinatesModule, MaterialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
