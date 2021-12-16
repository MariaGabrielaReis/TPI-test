import { Delete } from '../Delete';
import { Input } from '../../utils/Input';
import { Order } from '../../model/Order';
import { Subsidiary } from '../../model/Subsidiary';

export class DeleteOrder extends Delete {
  public input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  protected deleteWithConfirmation(subsidiary: Subsidiary, id: number) {
    let orderToDelete;
    subsidiary.getOrders.map(order => {
      if (order.id === id) {
        orderToDelete = order;
      }
    });

    let confirmation = this.input
      .receiveText(
        ` Tem certeza que deseja excluir o pedido de código ${orderToDelete.id}, feito pelo cliente ${orderToDelete.client.name}? [s/n] `
      )
      .toLowerCase();

    if (confirmation === 's') {
      let updatedOrders: Order[] = [];
      subsidiary.getOrders.map(order => {
        if (order.id !== id) {
          updatedOrders.push(order);
        }
      });
      subsidiary.setOrders(updatedOrders);
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

  public delete(orderId: number, subsidiary: Subsidiary): void {
    console.log(
      `\nExclusão de pedido ----------------------------------------------`
    );
    this.deleteWithConfirmation(subsidiary, orderId);

    let moreDelete = this.input
      .receiveText(`Deseja excluir mais algum pedido? [s/n] `)
      .toLowerCase();
    while (moreDelete === 's') {
      const id = this.input.receiveNumber(`Código do pedido para exclusão: `);
      this.deleteWithConfirmation(subsidiary, id);

      moreDelete = this.input
        .receiveText(`Deseja excluir mais algum pedido? [s/n] `)
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
