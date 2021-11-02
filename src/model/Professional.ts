import { Person } from './Person';
import { Phone } from './Phone';
import { Service } from './Service';

export class Professional extends Person {
  private services: Service[];

  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    services: Service[],
    phones: Phone[],
    pseudonym: string
  ) {
    super(gender, name, birthday, cpf, phones, pseudonym);
    this.services = services;
  }

  // GETTERS & SETTERS
  public get getServices(): Service[] {
    return this.services;
  }
  public setServices(services: Service[]) {
    this.services = services;
  }
}
