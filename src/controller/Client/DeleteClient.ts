import { Delete } from '../Delete';
import { Input } from '../../utils/Input';
import { Subsidiary } from '../../model/Subsidiary';
import { Client } from '../../model/Client';

export class DeleteClient extends Delete {
  public input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  protected deleteWithConfirmation(subsidiary: Subsidiary, cpf: number) {
    let clientToDelete;
    subsidiary.getClients.map(client => {
      if (client.cpf === cpf) {
        clientToDelete = client;
      }
    });

    let confirmation = this.input
      .receiveText(
        ` Tem certeza que deseja excluir ${clientToDelete.getName}, de CPF: ${clientToDelete.cpf}? [s/n] `
      )
      .toLowerCase();

    if (confirmation === 's') {
      let updatedClients: Client[] = [];
      subsidiary.getClients.map(client => {
        if (client.cpf !== cpf) {
          updatedClients.push(client);
        }
      });
      subsidiary.setClients(updatedClients);
      console.log('Exclusão concluída com sucesso! :)');
    } else {
      console.log('Tarefa cancelada com sucesso! :)');
    }
  }

  public delete(clientCpf: number, subsidiary: Subsidiary): void {
    console.log(
      `\nExclusão de cliente ---------------------------------------------`
    );
    this.deleteWithConfirmation(subsidiary, clientCpf);

    let moreDelete = this.input
      .receiveText(`Deseja excluir mais algum cliente? [s/n] `)
      .toLowerCase();
    while (moreDelete === 's') {
      const cpf = this.input.receiveNumber(`CPF para excluir: `);
      this.deleteWithConfirmation(subsidiary, cpf);

      moreDelete = this.input
        .receiveText(`Deseja excluir mais algum cliente? [s/n] `)
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
