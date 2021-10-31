import { Client } from '../model/Client';
import { Subsidiary } from '../model/Subsidiary';
import { List } from './List';

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
      console.log(`Nome: ` + client.getName);
      console.log(`Nome social/apelido: ` + client.pseudonym);
      console.log(`CPF: ` + client.cpf);

      console.log(`-------------------------------------------`);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
