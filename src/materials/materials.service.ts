import { Repository } from 'typeorm';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material) private readonly repo: Repository<Material>,
  ) {}

  async create(
    id: number,
    name: string,
    description: string,
    fuse_attack_power: number,
    hearts_recovered: number,
    unique_cooking_effect: string,
    common_locations: string[],
    tradeable: boolean,
  ) {
    const potentialDuplicateMaterial = await this.repo.find({
      where: { name },
    });

    if (potentialDuplicateMaterial.length !== 0) {
      const { id, name } = potentialDuplicateMaterial[0];

      throw new ConflictException(
        `A 'material' record with a 'name' of ${name} already exists as id #${id}`,
      );
    }

    const material = this.repo.create({
      id,
      name,
      description,
      fuse_attack_power,
      hearts_recovered,
      unique_cooking_effect,
      common_locations,
      tradeable,
    });

    return this.repo.save(material);
  }
}
