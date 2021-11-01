import { Client } from '../model/Client';
import { Input } from '../utils/Input';
import { Phone } from '../model/Phone';
import { Register } from './Register';
import { Subsidiary } from '../model/Subsidiary';

export class RegisterClient extends Register {
  private input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  public register(subsidiary: Subsidiary): void {
    console.log(
      `\nCadastro de cliente --------------------------------------------`
    );

    const gender = this.input.receiveText(`Gênero: `);
    const name = this.input.receiveText(`Nome: `);
    const birthday = new Date(this.input.receiveText(`Aniversário: `));
    const cpf = this.input.receiveNumber(`CPF: `);

    let ddd = this.input.receiveNumber(`Telefone - DDD: `);
    let number = this.input.receiveNumber(`Telefone - número: `);
    let phones = <Phone[]>[];
    phones.push(new Phone(ddd, number));

    let morePhones = this.input.receiveText(`Mais algum? [s/n] `);
    while (morePhones === 's') {
      ddd = this.input.receiveNumber(`Telefone - DDD: `);
      number = this.input.receiveNumber(`Telefone - número: `);
      phones.push(new Phone(ddd, number));

      morePhones = this.input.receiveText(`Mais algum? [s/n] `);
    }

    const hasPseudonym = this.input.receiveText(`Nome social/apelido? [s/n]`);

    if (hasPseudonym === 's') {
      const pseudonym = this.input.receiveText(`Nome social/apelido: `);
      const newClient = new Client(
        gender,
        name,
        birthday,
        cpf,
        phones,
        pseudonym
      );

      const clients = subsidiary.getClients;
      clients.push(newClient);
      subsidiary.setClients(clients);
    } else {
      const newClient = new Client(gender, name, birthday, cpf, phones);

      const clients = subsidiary.getClients;
      clients.push(newClient);
      subsidiary.setClients(clients);
    }

    console.log(`\nCadastro concluído com sucesso :)\n`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
}
