import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonLocation } from './entities/common-location.entity';

@Injectable()
export class CommonLocationsService {
  constructor(
    @InjectRepository(CommonLocation)
    private readonly repo: Repository<CommonLocation>,
  ) {}

  create(name: string) {
    const commonLocation = this.repo.create({ name });

    return this.repo.save(commonLocation);
  }
}
