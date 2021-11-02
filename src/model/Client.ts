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
    pseudonym: string
  ) {
    super(gender, name, birthday, cpf, phones, pseudonym);

    this.registrationDate = new Date();
  }
}
