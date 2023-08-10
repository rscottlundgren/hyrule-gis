import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UniqueCookingEffectsService } from './unique-cooking-effects.service';
import { CreateUniqueCookingEffectDto } from './dtos/create-unique-cooking-effect.dto';
import { UpdateUniqueCookingEffectDto } from './dtos/update-unique-cooking-effect.dto';

@Controller('unique-cooking-effects')
export class UniqueCookingEffectsController {
  constructor(
    private readonly uniqueCookingEffectsService: UniqueCookingEffectsService,
  ) {}

  @Post()
  createUniqueCookingEffect(@Body() body: CreateUniqueCookingEffectDto) {
    return this.uniqueCookingEffectsService.create(body.name, body.description);
  }

  @Get()
  findAllUniqueCookingEffects() {
    return this.uniqueCookingEffectsService.find();
  }

  @Get('/:id')
  findUniqueCookingEffect(@Param('id') id: string) {
    return this.uniqueCookingEffectsService.findOne(parseInt(id));
  }

  @Patch('/:id')
  updateUniqueCookingEffect(
    @Param('id') id: string,
    @Body() body: UpdateUniqueCookingEffectDto,
  ) {
    return this.uniqueCookingEffectsService.update(parseInt(id), body);
  }
}
