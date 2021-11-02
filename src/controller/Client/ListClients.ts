import { List } from '../List';
import { Subsidiary } from '../../model/Subsidiary';

export class ListClients extends List {
  constructor() {
    super();
  }

  public list(subsidiary: Subsidiary): void {
    console.log(
      `\nLista de todos os clientes -------------------------------------`
    );

    const clients = subsidiary.getClients;
    clients.forEach(client => {
      console.log(`
      Nome: ${client.getName}
      Nome social/apelido: ${client.pseudonym}
      CPF: ${client.cpf}
      Telefones:`);

      client.getPhones.forEach(phone => {
        console.log(`            (${phone.getDdd}) ${phone.getNumber}`);
      });
      console.log(`      -------------------------------------------`);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
