export class Service {
  readonly id: number;
  public name: string;
  public type: string;
  public value: number;

  constructor(name: string, type: string, value: number) {
    this.id = Math.random();
    this.name = name;
    this.type = type;
    this.value = value;
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
