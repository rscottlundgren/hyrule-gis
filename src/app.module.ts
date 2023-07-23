import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoordinatesModule } from './coordinates/coordinates.module';

@Module({
  imports: [UsersModule, CoordinatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
