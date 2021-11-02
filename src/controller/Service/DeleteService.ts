import { Delete } from '../Delete';
import { Input } from '../../utils/Input';
import { Service } from '../../model/Service';
import { Subsidiary } from '../../model/Subsidiary';

export class DeleteService extends Delete {
  public input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  protected deleteWithConfirmation(subsidiary: Subsidiary, id: number) {
    let serviceToDelete;
    subsidiary.getServices.map(service => {
      if (service.id === id) {
        serviceToDelete = service;
      }
    });

    let confirmation = this.input
      .receiveText(
        ` Tem certeza que deseja excluir o serviço de ${serviceToDelete.getName}? [s/n] `
      )
      .toLowerCase();

    if (confirmation === 's') {
      let updatedServices: Service[] = [];
      subsidiary.getServices.map(service => {
        if (service.id !== id) {
          updatedServices.push(service);
        }
      });
      subsidiary.setServices(updatedServices);
      console.log(`\nExclusão concluída com sucesso! :)`);
      console.log(
        '----------------------------------------------------------------'
      );
    } else {
      console.log(`\nTarefa cancelada com sucesso! :)`);
      console.log(
        '----------------------------------------------------------------'
      );
    }
  }

  public delete(serviceId: number, subsidiary: Subsidiary): void {
    console.log(
      `\nExclusão de serviço ---------------------------------------------`
    );
    this.deleteWithConfirmation(subsidiary, serviceId);

    let moreDelete = this.input
      .receiveText(`Deseja excluir mais algum serviço? [s/n] `)
      .toLowerCase();
    while (moreDelete === 's') {
      const id = this.input.receiveNumber(`Código do serviço a excluir: `);
      this.deleteWithConfirmation(subsidiary, id);

      moreDelete = this.input
        .receiveText(`Deseja excluir mais algum serviço? [s/n] `)
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
