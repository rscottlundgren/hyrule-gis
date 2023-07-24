import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  middle_name: string;

  @Column()
  last_name: string;

  @Column()
  preferred_name: string;

  @Column()
  phone_number: number;

  @Column()
  roles: number;

  @Column()
  account_status: string;

  @Column()
  creation_date: string;

  @Column()
  last_login_date: string;

  @Column()
  github_username: string;
}
