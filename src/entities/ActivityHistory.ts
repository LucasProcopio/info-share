import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('activity_history')
export default class ActivityHistory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column('timestamp')
  timecreated: Date;

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
