import { Entity, Column, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm';
import { UniqueCookingEffect } from '../../unique-cooking-effects/entities/unique-cooking-effect.entity';
import { CommonLocation } from '../../common-locations/entities/common-location.entity';

@Entity()
export class Material {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  fuse_attack_power: number;

  @Column({ nullable: true })
  hearts_recovered: number;

  @ManyToOne(
    () => UniqueCookingEffect,
    (uniqueCookingEffect) => uniqueCookingEffect.materials,
    { nullable: true, cascade: ['update', 'remove', 'soft-remove'] },
  )
  unique_cooking_effect: UniqueCookingEffect;

  @ManyToMany(
    () => CommonLocation,
    (commonLocation) => commonLocation.materials,
    { cascade: ['update', 'remove', 'soft-remove'] },
  )
  common_locations: CommonLocation[];

  @Column({ nullable: true })
  tradeable: boolean;
}
