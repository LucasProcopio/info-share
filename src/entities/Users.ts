import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  activitiesIDs: string;

  @Column('timestamp')
  timecreated: Date;
}
