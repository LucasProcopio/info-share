class User {
  firstName: string;

  lastname: string;

  username: string;

  password: string;

  email: string;

  activitiesIDs: string;

  timecreated: Date;

  constructor({
    firstName,
    lastname,
    email,
    password,
    username,
  }: Omit<User, 'timecreated' | 'activitiesIDs'>) {
    this.firstName = firstName;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.username = username;
    this.activitiesIDs = '';
    this.timecreated = new Date();
  }
}

export default User;
