import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('activities')
export default class Activities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column('timestamp')
  timecreated: Date;

  @Column('timestamp')
  timeupdated: Date;

  @Column('int')
  authorID: number;

  @Column('int')
  isPublic: number;

  @Column()
  contributorsIDs: string;

  @Column('smallint')
  isExpired: number;

  @Column('smallint')
  version: number;
}
