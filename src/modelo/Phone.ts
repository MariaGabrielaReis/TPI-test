export class Phone {
  ddd: number;
  number: number;

  constructor(ddd: number, number: number) {
    this.ddd = ddd;
    this.number = number;
  }

  //GETTERS & SETTERS
  public get getDdd(): number {
    return this.ddd;
  }
  public set setDdd(ddd: number) {
    this.ddd = ddd;
  }

  public get getNumber(): number {
    return this.ddd;
  }
  public set setNumber(number: number) {
    this.number = number;
  }
}
