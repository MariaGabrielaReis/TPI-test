export class Product {
  public id: number;
  public name: string;
  public type: string;
  public value: number;
  readonly expirationDate: Date;
  readonly brand: string;

  constructor(
    name: string,
    type: string,
    value: number,
    expirationDate: Date,
    brand: string
  ) {
    this.id = Math.random();
    this.name = name;
    this.type = type;
    this.value = value;
    this.expirationDate = expirationDate;
    this.brand = brand;
  }

  // GETTERS & SETTERS
  public get getName(): string {
    return this.name;
  }
  public set setName(name: string) {
    this.name = name;
  }

  public get getType(): string {
    return this.type;
  }
  public set setType(type: string) {
    this.type = type;
  }

  public get getValue(): number {
    return this.value;
  }
  public set setValue(value: number) {
    this.value = value;
  }
}
