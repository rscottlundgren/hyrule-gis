import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CommonLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  materials: number[];
}
