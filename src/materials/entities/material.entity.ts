import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { UniqueCookingEffect } from '../../unique-cooking-effects/entities/unique-cooking-effect.entity';

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
    { nullable: true },
  )
  unique_cooking_effect: UniqueCookingEffect;

  @Column('json')
  common_locations: string[];

  @Column({ nullable: true })
  tradeable: boolean;
}
