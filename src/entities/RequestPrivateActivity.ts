import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('req_private_activities')
export default class RequestPrivateActivities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Generated('uuid')
  activityId: string;

  @Column()
  authorId: string;

  @Column()
  userId: string;

  @Column('smallint')
  accepted: number;

  @Column('timestamp')
  timecreated: Date;
}
