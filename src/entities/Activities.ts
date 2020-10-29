import { v4 } from 'uuid';

class Activities {
  id: string;

  title: string;

  body: string;

  timecreated: Date;

  timeupdated: Date;

  authorID: number;

  isPublic: number;

  contributorsIDs: string;

  isExpired: number;

  version: number;

  constructor({
    title,
    body,
    authorID,
    isPublic,
  }: Omit<
    Activities,
    | 'id'
    | 'timecreated'
    | 'timeupdated'
    | 'contributorsIDs'
    | 'isExpired'
    | 'version'
  >) {
    const currentDate = new Date();
    this.id = v4();
    this.title = title;
    this.body = body;
    this.authorID = authorID;
    this.isPublic = isPublic;
    this.timecreated = currentDate;
    this.timeupdated = currentDate;
    this.contributorsIDs = '';
    this.isExpired = 0;
    this.version = 1.0;
  }
}

export default Activities;
