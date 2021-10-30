import { Phone } from './Phone';
import { Service } from './Service';

export class Professional {
  name: string;
  readonly birthday: Date;
  readonly cpf: number;
  services: Array<Service>;
  phones: Array<Phone>;
  readonly pseudonym?: string;

  // sobrecarga de método (variações do construtor)
  constructor(
    name: string,
    birthday: Date,
    cpf: number,
    services: Array<Service>,
    phones: Array<Phone>,
    pseudonym: string
  );
  constructor(
    name: string,
    birthday: Date,
    cpf: number,
    services: Array<Service>,
    phones: Array<Phone>
  );
  constructor(
    name: string,
    birthday: Date,
    cpf: number,
    services: Array<Service>,
    phones: Array<Phone>,
    pseudonym?: string
  ) {
    this.name = name;
    this.birthday = birthday;
    this.cpf = cpf;
    this.services = services;
    this.phones = phones;

    if (this.pseudonym !== undefined) {
      this.pseudonym = pseudonym;
    }
  }

  // GETTERS & SETTERS
  public get getName(): string {
    return this.name;
  }
  public set setName(name: string) {
    this.name = name;
  }

  public get getServices(): Array<Service> {
    return this.services;
  }
  public set setServices(services: Array<Service>) {
    this.services = services;
  }

  public get getPhones(): Array<Phone> {
    return this.phones;
  }
  public addPhone(newPhone: Phone) {
    this.phones.push(newPhone);
    return this.phones;
  }
  public removePhone(removedPhone: Phone) {
    const uptadedPhones = this.phones.filter(phone => {
      phone.getDdd !== removedPhone.getDdd &&
        phone.getNumber !== removedPhone.getNumber;
    });
    this.phones = uptadedPhones;
    return this.phones;
  }
}
