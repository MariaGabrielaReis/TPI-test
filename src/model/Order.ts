import { Client } from './Client';
import { Product } from './Product';
import { Service } from './Service';

export class Order {
  public id: number;
  public client: Client;
  public product?: Product;
  public amountProduct?: number;
  public service?: Service;
  readonly date: Date;

  // sobrecarga de método (variações do construtor)
  constructor(
    client: Client,
    product: Product,
    amountProduct: number,
    service: Service
  );
  constructor(client: Client, product: Product, amountProduct: number);
  constructor(client: Client, service?: Service);
  constructor(
    client: Client,
    product?: Product,
    amountProduct?: number,
    service?: Service
  ) {
    this.id = Math.random();
    this.client = client;
    this.date = new Date();

    if (product !== undefined) {
      this.product = product;
      this.amountProduct = amountProduct;
    }

    if (service !== undefined) {
      this.service = service;
    }
  }
}
