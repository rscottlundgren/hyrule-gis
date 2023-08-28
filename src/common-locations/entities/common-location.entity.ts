import {
  Entity,
  Column,
  ManyToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import { Material } from '../../materials/entities/material.entity';

@Entity()
export class CommonLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Material, (material) => material.common_locations)
  @JoinTable({ name: 'common_location_to_material' })
  materials: Material[];
}
