export class Guest {
  public firstName: string;
  public lastName: string;
  public email: string;
  public plusOne: string;

  constructor (firstName: string, lastName: string, email: string, plusOne: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.plusOne = plusOne;
  }
}
