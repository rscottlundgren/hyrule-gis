import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Material } from '../../materials/entities/material.entity';

@Entity()
export class UniqueCookingEffect {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Material, (material) => material.unique_cooking_effect)
  materials: Material[];
}
