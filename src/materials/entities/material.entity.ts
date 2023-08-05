import { Entity, Column, PrimaryColumn } from 'typeorm';

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

  @Column()
  hearts_recovered: number;

  @Column()
  unique_cooking_effects: string;

  @Column()
  common_locations: string;

  @Column()
  tradeable: boolean;
}
