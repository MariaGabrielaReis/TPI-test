import { Subsidiary } from '../model/Subsidiary';
import { Client } from '../model/Client';
import { Phone } from '../model/Phone';
import { Order } from '../model/Order';
import { Product } from '../model/Product';

export const populateOrders = (subsidiary: Subsidiary) => {
  const orders = subsidiary.getOrders;

  ordersMock.forEach(orderMock => {
    let newOrder;
    if (orderMock.client.pseudonym != undefined) {
      let phones: Phone[] = [];
      orderMock.client.phones.forEach(phone => {
        phones.push(new Phone(phone.ddd, phone.number));
      });

      const client = new Client(
        orderMock.client.gender,
        orderMock.client.name,
        orderMock.client.birthday,
        orderMock.client.cpf,
        phones,
        orderMock.client.pseudonym
      );

      const product = new Product(
        orderMock.product.name,
        orderMock.product.type,
        orderMock.product.brand,
        orderMock.product.value,
        orderMock.product.expirationDate
      );

      const amountProduct = orderMock.amountProduct;

      newOrder = new Order(client, product, amountProduct);
    } else {
      let phones: Phone[] = [];
      orderMock.client.phones.forEach(phone => {
        phones.push(new Phone(phone.ddd, phone.number));
      });

      const client = new Client(
        orderMock.client.gender,
        orderMock.client.name,
        orderMock.client.birthday,
        orderMock.client.cpf,
        phones,
        'não há'
      );

      const product = new Product(
        orderMock.product.name,
        orderMock.product.type,
        orderMock.product.brand,
        orderMock.product.value,
        orderMock.product.expirationDate
      );

      const amountProduct = orderMock.amountProduct;
      newOrder = new Order(client, product, amountProduct);
    }

    orders.push(newOrder);
  });

  subsidiary.setOrders(orders);
};

const ordersMock = [
  {
    client: {
      gender: 'feminino',
      name: 'Maria',
      birthday: new Date(),
      cpf: 123,
      phones: [
        { ddd: 12, number: 111111111 },
        { ddd: 12, number: 222222222 },
      ],
      pseudonym: 'Maby',
    },
    product: {
      name: 'Shampoo 500ml Abacaxi',
      type: 'Shampoo',
      brand: 'Jhon & Jhon',
      value: 14.75,
      expirationDate: '21/12/2021',
    },
    amountProduct: 3,
  },
  {
    client: {
      gender: 'feminino',
      name: 'Maria',
      birthday: new Date(),
      cpf: 123,
      phones: [
        { ddd: 12, number: 111111111 },
        { ddd: 12, number: 222222222 },
      ],
      pseudonym: 'Maby',
    },
    product: {
      name: 'Condicionador 300ml Abacaxi',
      type: 'Condicionador',
      brand: 'Jhon & Jhon',
      value: 20.25,
      expirationDate: '21/12/2021',
    },
    amountProduct: 2,
  },
  {
    client: {
      gender: 'masculino',
      name: 'Renato',
      birthday: new Date(),
      cpf: 123456,
      phones: [{ ddd: 12, number: 555555555 }],
    },
    product: {
      name: 'Creme para pentear 500ml Abacaxi',
      type: 'Creme para pentear',
      brand: 'Jhon & Jhon',
      value: 10.5,
      expirationDate: '21/12/2021',
    },
    amountProduct: 1,
  },
  {
    client: {
      gender: 'masculino',
      name: 'Renato',
      birthday: new Date(),
      cpf: 123456,
      phones: [{ ddd: 12, number: 555555555 }],
    },
    product: {
      name: 'Shampoo 500ml Abacaxi',
      type: 'Shampoo',
      brand: 'Jhon & Jhon',
      value: 14.75,
      expirationDate: '21/12/2021',
    },
    amountProduct: 3,
  },
  {
    client: {
      gender: 'feminino',
      name: 'Gabriela',
      birthday: new Date(),
      cpf: 1234,
      phones: [{ ddd: 12, number: 333333333 }],
      pseudonym: 'Gabi',
    },
    product: {
      name: 'Creme hidratação 100ml Morango',
      type: 'Creme hidratação',
      brand: 'Jhon & Jhon',
      value: 7.2,
      expirationDate: '21/12/2021',
    },
    amountProduct: 2,
  },
];
