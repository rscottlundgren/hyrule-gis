import { Repository } from 'typeorm';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Material } from './entities/material.entity';
import { UniqueCookingEffectsService } from 'src/unique-cooking-effects/unique-cooking-effects.service';
import { CommonLocationsService } from '../common-locations/common-locations.service';
import { UpdateMaterialDto } from './dtos/update-material.dto';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private readonly repoMaterial: Repository<Material>,
    private readonly srvcUniqueCookingEffect: UniqueCookingEffectsService,
    private readonly srvcCommonLocation: CommonLocationsService,
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
    const potentialUniqueCookingEffect =
      unique_cooking_effect &&
      (await this.srvcUniqueCookingEffect.findByName(unique_cooking_effect));

    const potentialCommonLocations =
      common_locations.length !== 0 &&
      (await Promise.all(
        await this.srvcCommonLocation.findByName(common_locations),
      ));

    const potentialMaterial = await this.repoMaterial.find({
      where: { name },
    });

    if (potentialMaterial.length !== 0) {
      const { id, name } = potentialMaterial[0];

      throw new ConflictException(
        `A 'material' record with a 'name' of ${name} already exists as id #${id}`,
      );
    }

    const material = this.repoMaterial.create({
      id,
      name,
      description,
      fuse_attack_power,
      hearts_recovered,
      tradeable,
    });

    material.unique_cooking_effect = potentialUniqueCookingEffect[0];

    material.common_locations = potentialCommonLocations;

    return this.repoMaterial.save(material);
  }

  find() {
    return this.repoMaterial.find({
      select: {
        id: true,
        name: true,
        description: true,
        fuse_attack_power: true,
        hearts_recovered: true,
        unique_cooking_effect: { name: true },
        common_locations: { name: true },
        tradeable: true,
      },
      relations: {
        unique_cooking_effect: true,
        common_locations: true,
      },
    });
  }

  findOne(id: number) {
    return this.repoMaterial.findOneBy({ id });
  }

  async update(id: number, attrs: Partial<UpdateMaterialDto>) {
    const material = await this.findOne(id);

    if (!material) {
      throw new NotFoundException();
    }

    const unique_cooking_effect =
      attrs.unique_cooking_effect &&
      (await this.srvcUniqueCookingEffect.findByName(
        attrs.unique_cooking_effect,
      ));

    const common_locations =
      attrs.common_locations.length > 0 &&
      (await Promise.all(
        await this.srvcCommonLocation.findByName(attrs.common_locations),
      ));

    Object.assign(material, attrs);

    if (attrs.unique_cooking_effect) {
      material.unique_cooking_effect = unique_cooking_effect[0];
    }

    if (attrs.common_locations.length > 0) {
      material.common_locations = common_locations;
    }

    return this.repoMaterial.save(material);
  }

  async remove(id: number) {
    const material = await this.findOne(id);

    if (!material) {
      throw new NotFoundException();
    }

    return this.repoMaterial.remove(material);
  }
}
