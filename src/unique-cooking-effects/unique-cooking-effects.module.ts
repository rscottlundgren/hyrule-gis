import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniqueCookingEffect } from './entities/unique-cooking-effect.entity';
import { UniqueCookingEffectsController } from './unique-cooking-effects.controller';
import { UniqueCookingEffectsService } from './unique-cooking-effects.service';

@Module({
  imports: [TypeOrmModule.forFeature([UniqueCookingEffect])],
  controllers: [UniqueCookingEffectsController],
  providers: [UniqueCookingEffectsService],
})
export class UniqueCookingEffectsModule {}
