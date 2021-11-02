import { Input } from '../../utils/Input';
import { Subsidiary } from '../../model/Subsidiary';
import { Update } from '../Update';
import { Service } from '../../model/Service';

export class UpdateService extends Update {
  public input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  protected updateWithConfirmation(subsidiary: Subsidiary, id: number) {
    const updatedServices: Service[] = [];
    subsidiary.getServices.forEach(service => {
      if (service.id === id) {
        service.setName(this.input.receiveText(`Novo nome: `));
        service.setType(this.input.receiveText(`Novo tipo: `));
        service.setValue(this.input.receiveNumber(`Novo valor: `));
      }

      updatedServices.push(service);
    });
    subsidiary.setServices(updatedServices);
  }

  public update(serviceId: number, subsidiary: Subsidiary): void {
    console.log(
      `\nAtualização de cadastro de serviço -----------------------------`
    );

    this.updateWithConfirmation(subsidiary, serviceId);

    let moreUpdate = this.input
      .receiveText(`Deseja atualizar mais algum serviço? [s/n] `)
      .toLowerCase();
    while (moreUpdate === 's') {
      const id = this.input.receiveNumber(`Código para atualizar: `);
      this.updateWithConfirmation(subsidiary, id);

      moreUpdate = this.input
        .receiveText(`Deseja atualizar mais algum serviço? [s/n] `)
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
