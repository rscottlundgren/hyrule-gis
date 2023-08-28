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

  findAll() {
    return this.repo.find({
      select: {
        name: true,
      },
    });
  }

  async findByName(names: string[]): Promise<CommonLocation[]> {
    const commonLocations: CommonLocation[] = [];

    for (let i = 0; i < names.length; i++) {
      const commonLocation = await this.repo.find({
        where: { name: names[i] },
      });

      commonLocations.push(commonLocation[0]);
    }

    return commonLocations;
  }

  findById(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, attrs: Partial<CommonLocation>) {
    const commonLocation = await this.findById(id);

    if (!commonLocation) {
      throw new NotFoundException();
    }

    Object.assign(commonLocation, attrs);

    return this.repo.save(commonLocation);
  }

  async remove(id: number) {
    const commonLocation = await this.findById(id);

    if (!commonLocation) {
      throw new NotFoundException();
    }

    return this.repo.remove(commonLocation);
  }
}
