import { Body, Controller, Post } from '@nestjs/common';
import { UniqueCookingEffectsService } from './unique-cooking-effects.service';
import { CreateUniqueCookingEffectDto } from './dtos/create-unique-cooking-effect.dto';

@Controller('unique-cooking-effects')
export class UniqueCookingEffectsController {
  constructor(
    private readonly uniqueCookingEffectsService: UniqueCookingEffectsService,
  ) {}

  @Post()
  createUniqueCookingEffect(@Body() body: CreateUniqueCookingEffectDto) {
    return this.uniqueCookingEffectsService.create(body.name, body.description);
  }
}
