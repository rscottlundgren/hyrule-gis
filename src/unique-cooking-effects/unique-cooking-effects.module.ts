import { Module } from '@nestjs/common';
import { UniqueCookingEffectsController } from './unique-cooking-effects.controller';
import { UniqueCookingEffectsService } from './unique-cooking-effects.service';

@Module({
  controllers: [UniqueCookingEffectsController],
  providers: [UniqueCookingEffectsService]
})
export class UniqueCookingEffectsModule {}
