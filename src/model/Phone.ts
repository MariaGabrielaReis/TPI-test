export class Phone {
  public ddd: number;
  public number: number;

  constructor(ddd: number, number: number) {
    this.ddd = ddd;
    this.number = number;
  }

  //GETTERS & SETTERS
  public get getDdd(): number {
    return this.ddd;
  }
  public setDdd(ddd: number) {
    this.ddd = ddd;
  }

  public get getNumber(): number {
    return this.number;
  }
  public setNumber(number: number) {
    this.number = number;
  }
}
