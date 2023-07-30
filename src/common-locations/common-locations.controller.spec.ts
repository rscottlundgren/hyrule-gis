import { Test, TestingModule } from '@nestjs/testing';
import { CommonLocationsController } from './common-locations.controller';

describe('CommonLocationsController', () => {
  let controller: CommonLocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonLocationsController],
    }).compile();

    controller = module.get<CommonLocationsController>(CommonLocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
