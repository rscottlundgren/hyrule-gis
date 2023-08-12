import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonLocation } from './entities/common-location.entity';

@Injectable()
export class CommonLocationsService {
  constructor(
    @InjectRepository(CommonLocation)
    private readonly repo: Repository<CommonLocation>,
  ) {}

  async create(name: string) {
    const potentialDuplicateLocation = await this.repo.find({
      where: { name },
    });

    if (potentialDuplicateLocation.length !== 0) {
      const { id, name } = potentialDuplicateLocation[0];

      throw new ConflictException(
        `A 'common_location' record with a 'name' of ${name} already exists as id #${id}`,
      );
    }

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

  async remove(id: number) {
    const commonLocation = await this.findOne(id);

    if (!commonLocation) {
      throw new NotFoundException();
    }

    return this.repo.remove(commonLocation);
  }
}
