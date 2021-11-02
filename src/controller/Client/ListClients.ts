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
