export class User {
  userId?: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  country: string;
  city: string;

  constructor(
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    country: string,
    city: string
  ) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.country = country;
    this.city = city;
  }
}
