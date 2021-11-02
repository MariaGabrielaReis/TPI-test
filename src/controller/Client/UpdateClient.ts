import { Client } from '../../model/Client';
import { Input } from '../../utils/Input';
import { Phone } from '../../model/Phone';
import { Subsidiary } from '../../model/Subsidiary';
import { Update } from '../Update';

export class UpdateClient extends Update {
  public input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  protected updateWithConfirmation(subsidiary: Subsidiary, cpf: number) {
    const updatedClients: Client[] = [];
    subsidiary.getClients.forEach(client => {
      if (client.cpf === cpf) {
        client.setGender(this.input.receiveText(`Novo gênero: `));
        client.setName(this.input.receiveText(`Novo nome: `));

        const updatePhones = this.input
          .receiveText(`Quer atualizar algum telefone? [s/n] `)
          .toLowerCase();

        if (updatePhones === 's') {
          console.log(
            'OBS: Caso não se queira alterar algum telefone, digite novamente o antigo'
          );
          const phones = client.getPhones;
          for (let i: number = 0; i < client.getPhones.length; i++) {
            const newDDD = this.input.receiveNumber(
              `Antigo DDD: ${phones[i].getDdd}. Novo: `
            );
            const newNumber = this.input.receiveNumber(
              `Antigo número: ${phones[i].getNumber}. Novo: `
            );

            client.removePhone(phones[i]);
            client.addPhone(new Phone(newDDD, newNumber));
          }
        }

        let morePhone = this.input
          .receiveText(`Algum novo telefone? [s/n] `)
          .toLowerCase();
        if (morePhone === 's') {
          const newDDD = this.input.receiveNumber(`DDD: `);
          const newNumber = this.input.receiveNumber(`Número: `);

          client.addPhone(new Phone(newDDD, newNumber));

          morePhone = this.input
            .receiveText(`Algum novo telefone? [s/n] `)
            .toLowerCase();
        }
      }
      updatedClients.push(client);
    });
    subsidiary.setClients(updatedClients);
  }

  public update(clientCpf: number, subsidiary: Subsidiary): void {
    console.log(
      `\nAtualização de cadastro de cliente -----------------------------`
    );
    this.updateWithConfirmation(subsidiary, clientCpf);

    let moreUpdate = this.input
      .receiveText(`Deseja atualizar mais algum cliente? [s/n] `)
      .toLowerCase();
    while (moreUpdate === 's') {
      const cpf = this.input.receiveNumber(`CPF para atualizar: `);
      this.updateWithConfirmation(subsidiary, cpf);

      moreUpdate = this.input
        .receiveText(`Deseja atualizar mais algum cliente? [s/n] `)
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
