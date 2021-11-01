import { Person } from './Person';
import { Phone } from './Phone';

export class Client extends Person {
  readonly registrationDate: Date;

  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    phones: Phone[],
    pseudonym?: string
  ) {
    if (pseudonym !== undefined) {
      super(gender, name, birthday, cpf, phones, pseudonym);
    } else {
      super(gender, name, birthday, cpf, phones);
    }

    this.registrationDate = new Date();
  }
}
