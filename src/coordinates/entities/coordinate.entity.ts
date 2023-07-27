import { Entity, Column } from 'typeorm';

@Entity()
export class Coordinate {
  @Column()
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
