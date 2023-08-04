import { Injectable, NotFoundException } from '@nestjs/common';
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

  find() {
    return this.repo.find({
      select: {
        name: true,
      },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, attrs: Partial<CommonLocation>) {
    const commonLocation = await this.findOne(id);

    if (!commonLocation) {
      throw new NotFoundException();
    }

    Object.assign(commonLocation, attrs);

    return this.repo.save(commonLocation);
  }
}
