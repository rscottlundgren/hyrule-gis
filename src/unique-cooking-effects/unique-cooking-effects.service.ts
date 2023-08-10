import { Repository } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UniqueCookingEffect } from './entities/unique-cooking-effect.entity';

@Injectable()
export class UniqueCookingEffectsService {
  constructor(
    @InjectRepository(UniqueCookingEffect)
    private readonly repo: Repository<UniqueCookingEffect>,
  ) {}

  async create(name: string, description: string) {
    const potentialDuplicateCookingEffect = await this.repo.find({
      where: { name },
    });

    if (potentialDuplicateCookingEffect.length !== 0) {
      const { id, name } = potentialDuplicateCookingEffect[0];

      throw new ConflictException(
        `a 'unique_cooking_effect' record with a 'name' of ${name} already exists as id #${id}`,
      );
    }

    const uniqueCookingEffect = this.repo.create({ name, description });

    return this.repo.save(uniqueCookingEffect);
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
}
