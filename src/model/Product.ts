export class Product {
  readonly id: number;
  public name: string;
  public type: string;
  readonly brand: string;
  public value: number;
  readonly expirationDate: string;

  constructor(
    name: string,
    type: string,
    brand: string,
    value: number,
    expirationDate: string
  ) {
    this.id = Math.random();
    this.name = name;
    this.type = type;
    this.brand = brand;
    this.value = value;
    this.expirationDate = expirationDate;
  }

  // GETTERS & SETTERS
  public get getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }

  public get getType(): string {
    return this.type;
  }
  public setType(type: string) {
    this.type = type;
  }

  public get getValue(): number {
    return this.value;
  }
  public setValue(value: number) {
    this.value = value;
  }
}
