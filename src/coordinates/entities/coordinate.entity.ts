import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Coordinate {
  @PrimaryColumn()
  id: string;

  @Column()
  x: string;

  @Column()
  y: string;

  @Column()
  z: string;

  @Column()
  landmark_type: string;

  @Column()
  landmark_id: number;

  @Column()
  landmark_count: number;
}
