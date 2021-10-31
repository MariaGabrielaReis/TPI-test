export class Service {
  public name: string;
  public type: string;
  public value: number;

  constructor(name: string, type: string, value: number) {
    this.name = name;
    this.type = type;
    this.value = value;
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
