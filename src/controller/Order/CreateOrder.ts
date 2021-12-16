import { Create } from '../Create';
import { Input } from '../../utils/Input';
import { Order } from '../../model/Order';
import { Subsidiary } from '../../model/Subsidiary';

export class CreateOrder extends Create {
  private input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  public create(subsidiary: Subsidiary): void {
    console.log(
      `\nCadastro de pedido ---------------------------------------------`
    );

    const clientCpf = this.input.receiveNumber(`CPF do cliente: `);

    const products = subsidiary.getProducts;
    const services = subsidiary.getServices;

    const clients = subsidiary.getClients;
    clients.forEach(client => {
      if (client.cpf == clientCpf) {
        const hasProduct = this.input.receiveText('Comprou um produto? [s/n]');

        if (hasProduct.toLowerCase() === 's') {
          const productId = this.input.receiveNumber(`Id do produto: `);
          const amountProduct = this.input.receiveNumber(`Quantidade: `);

          products.forEach(product => {
            if (product.id === productId) {
              const hasService = this.input.receiveText(
                'Comprou um serviço? [s/n]'
              );

              if (hasService.toLowerCase() === 's') {
                const serviceId = this.input.receiveNumber(`Id do servico: `);

                services.forEach(service => {
                  if (service.id === serviceId) {
                    const newOrder = new Order(
                      client,
                      product,
                      amountProduct,
                      service
                    );

                    const orders = subsidiary.getOrders;
                    orders.push(newOrder);
                    subsidiary.setOrders(orders);
                  }
                });
              } else {
                const newOrder = new Order(client, product, amountProduct);

                const orders = subsidiary.getOrders;
                orders.push(newOrder);
                subsidiary.setOrders(orders);
              }
            }
          });
        }

        const hasService = this.input.receiveText('Realizou um serviço? [s/n]');

        if (hasService.toLowerCase() === 's') {
          const serviceId = this.input.receiveNumber(`Id do servico: `);

          services.forEach(service => {
            if (service.id === serviceId) {
              const newOrder = new Order(client, service);

              const orders = subsidiary.getOrders;
              orders.push(newOrder);
              subsidiary.setOrders(orders);
            }
          });
        }
      }
    });

    console.log(`\nPedido cadastrado com sucesso :)\n`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
}
