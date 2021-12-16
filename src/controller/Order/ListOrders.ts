import { List } from '../List';
import { Subsidiary } from '../../model/Subsidiary';

export class ListOrders extends List {
  constructor() {
    super();
  }

  public list(subsidiary: Subsidiary): void {
    console.log(
      `\nLista de todos os pedidos --------------------------------------`
    );

    const orders = subsidiary.getOrders;
    orders.forEach(order => {
      console.log(`
      Código: ${order.id}
      Cliente: ${order.client.getName}
      Valor: R$ ${
        order.service
          ? order.product
            ? order.product!.getValue * order.amountProduct! +
              order.service.getValue
            : order.service.getValue
          : order.product
          ? order.product!.getValue * order.amountProduct!
          : 'Produtos/serviços não encontrados!'
      }
      -------------------------------------------
      `);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
