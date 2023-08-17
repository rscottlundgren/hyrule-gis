import { Repository } from 'typeorm';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { UniqueCookingEffectsService } from 'src/unique-cooking-effects/unique-cooking-effects.service';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material) private readonly repo: Repository<Material>,
    private readonly uceService: UniqueCookingEffectsService,
  ) {}

  async create(
    id: number,
    name: string,
    description: string,
    fuse_attack_power: number,
    hearts_recovered: number,
    common_locations: string[],
    tradeable: boolean,
    unique_cooking_effect: string,
  ) {
    /**
     * 1. Check to see if we can return a value for the unique_cooking_effect
     */
    const potentialUniqueCookingEffect = await this.uceService.findByName(
      unique_cooking_effect,
    );

    /**
     * 3. Check to see if we can return a value for the material
     */
    const potentialMaterial = await this.repo.find({
      where: { name },
    });

    /**
     * 4. Validate presence of material value; throw err if present
     */
    if (potentialMaterial.length !== 0) {
      const { id, name } = potentialMaterial[0];

      throw new ConflictException(
        `A 'material' record with a 'name' of ${name} already exists as id #${id}`,
      );
    }

    /**
     * 5. Create the material object
     */
    const material = this.repo.create({
      id,
      name,
      description,
      fuse_attack_power,
      hearts_recovered,
      common_locations,
      tradeable,
    });

    material.unique_cooking_effect = potentialUniqueCookingEffect[0];

    return this.repo.save(material);
  }

  find() {
    return this.repo.find({
      select: {
        id: true,
        name: true,
        description: true,
        fuse_attack_power: true,
        hearts_recovered: true,
        unique_cooking_effect: { name: true },
        common_locations: true,
        tradeable: true,
      },
      relations: {
        unique_cooking_effect: true,
      },
    });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, attrs: Partial<Material>) {
    const material = await this.findOne(id);

    if (!material) {
      throw new NotFoundException();
    }

    Object.assign(material, attrs);

    return this.repo.save(material);
  }

  async remove(id: number) {
    const material = await this.findOne(id);

    if (!material) {
      throw new NotFoundException();
    }

    return this.repo.remove(material);
  }
}
