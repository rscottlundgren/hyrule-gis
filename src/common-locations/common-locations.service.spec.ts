import { Test, TestingModule } from '@nestjs/testing';
import { CommonLocationsService } from './common-locations.service';

describe('CommonLocationsService', () => {
  let service: CommonLocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonLocationsService],
    }).compile();

    service = module.get<CommonLocationsService>(CommonLocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
