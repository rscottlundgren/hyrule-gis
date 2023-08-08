import { Test, TestingModule } from '@nestjs/testing';
import { UniqueCookingEffectsController } from './unique-cooking-effects.controller';

describe('UniqueCookingEffectsController', () => {
  let controller: UniqueCookingEffectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UniqueCookingEffectsController],
    }).compile();

    controller = module.get<UniqueCookingEffectsController>(UniqueCookingEffectsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
