import { List } from '../List';
import { Subsidiary } from '../../model/Subsidiary';

export class ListServices extends List {
  constructor() {
    super();
  }

  public list(subsidiary: Subsidiary): void {
    console.log(
      `\nLista de todos os serviços -------------------------------------`
    );

    const services = subsidiary.getServices;
    services.forEach(service => {
      console.log(`
      Código: ${service.id}
      Nome: ${service.getName}
      Valor: R$ ${service.getValue}
      -------------------------------------------
      `);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
