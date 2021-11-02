import { Create } from '../Create';
import { Input } from '../../utils/Input';
import { Service } from '../../model/Service';
import { Subsidiary } from '../../model/Subsidiary';

export class CreateService extends Create {
  private input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  public create(subsidiary: Subsidiary): void {
    console.log(
      `\nCadastro de produto --------------------------------------------`
    );
    const name = this.input.receiveText(`Nome: `).toLowerCase();
    const type = this.input.receiveText(`Tipo: `).toLowerCase();
    const value = this.input.receiveNumber(`Valor: R$`);

    const newService = new Service(name, type, value);

    const services = subsidiary.getServices;
    services.push(newService);
    subsidiary.setServices(services);

    console.log(`\nCadastro concluído com sucesso :)\n`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
}
