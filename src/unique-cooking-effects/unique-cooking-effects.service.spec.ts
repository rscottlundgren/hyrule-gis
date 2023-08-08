import { Test, TestingModule } from '@nestjs/testing';
import { UniqueCookingEffectsService } from './unique-cooking-effects.service';

describe('UniqueCookingEffectsService', () => {
  let service: UniqueCookingEffectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UniqueCookingEffectsService],
    }).compile();

    service = module.get<UniqueCookingEffectsService>(UniqueCookingEffectsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
