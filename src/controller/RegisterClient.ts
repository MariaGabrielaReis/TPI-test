import Entrada from '../services/entrada';
import { Client } from '../model/Client';
import { Phone } from '../model/Phone';
import { Register } from './Register';
import { Subsidiary } from '../model/Subsidiary';

export class RegisterClient extends Register {
  private entrada: Entrada;

  constructor() {
    super();
    this.entrada = new Entrada();
  }

  public register(subsidiary: Subsidiary): void {
    console.log(
      `\nCadastro de cliente --------------------------------------------`
    );

    let gender = this.entrada.receberTexto(`Gênero: `);
    let name = this.entrada.receberTexto(`Nome: `);
    let birthday = new Date(this.entrada.receberTexto(`Aniversário: `));
    let cpf = Number(this.entrada.receberTexto(`CPF: `));

    let ddd = Number(this.entrada.receberTexto(`Telefone - DDD: `));
    let number = Number(this.entrada.receberTexto(`Telefone - número: `));
    let phones = <Phone[]>[];
    phones.push(new Phone(ddd, number));

    let morePhones = this.entrada.receberTexto(`Mais algum? [s/n] `);
    while (morePhones === 's') {
      ddd = Number(this.entrada.receberTexto(`Telefone - DDD: `));
      number = Number(this.entrada.receberTexto(`Telefone - número: `));
      phones.push(new Phone(ddd, number));

      morePhones = this.entrada.receberTexto(`Mais algum? [s/n] `);
    }

    let hasPseudonym = this.entrada.receberTexto(`Nome social/apelido? [s/n]`);

    if (hasPseudonym === 's') {
      let pseudonym = this.entrada.receberTexto(`Nome social/apelido: `);
      let newClient = new Client(
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
      let newClient = new Client(gender, name, birthday, cpf, phones);

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
