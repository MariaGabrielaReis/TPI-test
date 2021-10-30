import { Phone } from './Phone';

export class Client {
  gender: string;
  name: string;
  readonly birthday: Date;
  readonly cpf: number;
  readonly registrationDate: Date;
  phones: Array<Phone>;
  readonly pseudonym?: string;

  produtosConsumidos: Array<Phone>;
  servicosConsumidos: Array<Phone>;

  // sobrecarga de método (variações do construtor)
  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    phones: Array<Phone>,
    pseudonym: string
  );
  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    phones: Array<Phone>
  );
  constructor(
    gender: string,
    name: string,
    birthday: Date,
    cpf: number,
    phones: Array<Phone>,
    pseudonym?: string
  ) {
    this.gender = gender;
    this.name = name;
    this.birthday = birthday;
    this.cpf = cpf;
    this.registrationDate = new Date();
    this.phones = phones;

    if (pseudonym !== undefined) {
      this.pseudonym = pseudonym;
    }

    this.produtosConsumidos = [];
    this.servicosConsumidos = [];
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

  //public get getProdutosConsumidos(): Array<Produto> {
  //  return this.produtosConsumidos;
  //}
  //public get getServicosConsumidos(): Array<Servico> {
  //  return this.servicosConsumidos;
  //}
}
