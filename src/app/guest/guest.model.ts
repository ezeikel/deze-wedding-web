export class Guest {
  public firstName: string;
  public lastName: string;
  public email: string;
  public bringingPlusOne: boolean;
  public plusOne: object;

  constructor (firstName: string, lastName: string, email: string, bringingPlusOne: boolean, plusOne: object) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.bringingPlusOne = bringingPlusOne;
    this.plusOne = plusOne;
  }
}
