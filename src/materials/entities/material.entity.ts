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

  @Column({ nullable: true })
  hearts_recovered: number;

  @Column({ nullable: true })
  unique_cooking_effect: string;

  @Column('json')
  common_locations: string[];

  @Column({ nullable: true })
  tradeable: boolean;
}
