import { Subsidiary } from '../../model/Subsidiary';
import { Order } from '../../model/Order';

interface ClientConsumption {
  client: {
    gender;
    name;
    birthday;
    cpf;
    phones;
    pseudonym;
  };
  amount: number;
}

interface ClientMoreConsumption {
  name: string;
  cpf: number;
  amount: number;
}

export class SelectClients {
  constructor() {}

  public selectClientsByMoreConsumedInQuantity(subsidiary: Subsidiary): void {
    console.log(
      `\nLista dos clientes que mais consumiram em quantidade -----------`
    );

    let clientsOrders: Order[] = [];
    const clients = subsidiary.getClients;
    const orders = subsidiary.getOrders;
    clients.forEach(client => {
      orders.forEach(order => {
        if (order.client.cpf === client.cpf) {
          clientsOrders.push(order);
        }
      });
    });

    let clientConsumptionList: ClientConsumption[] = [];
    clientsOrders.forEach(clientOrder => {
      let clientConsumptionMock = {
        client: clientOrder.client,
        amount: clientOrder.service
          ? clientOrder.amountProduct! + 1
          : clientOrder.amountProduct!,
      };
      clientConsumptionList.push(clientConsumptionMock);
    });

    const clientConsumptionListSorted = clientConsumptionList.sort(function (
      a,
      b
    ) {
      if (a.amount > b.amount) {
        return -1;
      }
      if (a.amount < b.amount) {
        return 1;
      }
      return 0;
    });

    let clientsMoreConsumption: ClientMoreConsumption[] = [];

    let i = 1;
    while (i < 10) {
      if (clientConsumptionList[i]) {
        clientsMoreConsumption[i + 1] = {
          name: clientConsumptionList[i].client.name,
          cpf: clientConsumptionList[i].client.cpf,
          amount: 0,
        };

        clientConsumptionListSorted.forEach(order => {
          if (clientConsumptionListSorted[i].client.cpf == order.client.cpf) {
            clientsMoreConsumption[i + 1].amount += order.amount;
          } else {
            i++;
          }
        });
      }
    }

    const clientsMoreConsumptionSorted = clientsMoreConsumption.sort(function (
      a,
      b
    ) {
      if (a.amount > b.amount) {
        return -1;
      }
      if (a.amount < b.amount) {
        return 1;
      }
      return 0;
    });

    clientsMoreConsumptionSorted.forEach(clientConsumption => {
      console.log(`
      Cliente: ${clientConsumption.name} (CPF: ${clientConsumption.cpf}) - Quantidade: ${clientConsumption.amount}
      -------------------------------------------
      `);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
