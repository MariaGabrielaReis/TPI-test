import { Phone } from './Phone';

export class Person {
  public gender: string;
  public name: string;
  readonly birthday: Date;
  readonly cpf: number;
  public phones: Phone[];
  readonly pseudonym?: string;

  // sobrecarga de método (variações do construtor)
  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    phones: Phone[],
    pseudonym: string
  );
  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    phones: Phone[]
  );
  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    phones: Phone[],
    pseudonym?: string
  ) {
    this.gender = gender;
    this.name = name;
    this.birthday = birthday;
    this.cpf = cpf;
    this.phones = phones;

    if (pseudonym !== undefined) {
      this.pseudonym = pseudonym;
    }
  }

  // GETTERS & SETTERS
  public get getGender(): string {
    return this.gender;
  }
  public set setGender(gender: string) {
    this.gender = gender;
  }

  public get getName(): string {
    return this.name;
  }
  public set setName(name: string) {
    this.name = name;
  }

  public get getPhones(): Phone[] {
    return this.phones;
  }
  public addPhone(newPhone: Phone): Phone[] {
    this.phones.push(newPhone);
    return this.phones;
  }
  public removePhone(removedPhone: Phone): Phone[] {
    const uptadedPhones = this.phones.filter(phone => {
      phone.getDdd !== removedPhone.getDdd &&
        phone.getNumber !== removedPhone.getNumber;
    });
    this.phones = uptadedPhones;
    return this.phones;
  }
}
