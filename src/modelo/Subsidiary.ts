import { Client } from './Client';
import { Product } from './Product';
import { Professional } from './Professional';
import { Schedule } from './Schedule';
import { Service } from './Service';

export class Subsidiary {
  name: string;
  clients: Array<Client>;
  products: Array<Product>;
  services: Array<Service>;
  professionals: Array<Professional>;
  schedule: Schedule;

  constructor(
    name: string,
    clients: Array<Client>,
    products: Array<Product>,
    services: Array<Service>,
    professionals: Array<Professional>,
    schedule: Schedule
  ) {
    this.name = name;
    this.clients = clients;
    this.products = products;
    this.services = services;
    this.professionals = professionals;
    this.schedule = schedule;
  }

  // GETTERS & SETTERS
  public get getName(): string {
    return this.name;
  }
  public set setName(name: string) {
    this.name = name;
  }

  public get getClients(): Array<Client> {
    return this.clients;
  }
  public set setClients(clients: Array<Client>) {
    this.clients = clients;
  }

  public get getProducts(): Array<Product> {
    return this.products;
  }
  public set setProducts(products: Array<Product>) {
    this.products = products;
  }

  public get getServices(): Array<Service> {
    return this.services;
  }
  public set setServices(services: Array<Service>) {
    this.services = services;
  }

  public get getProfessionals(): Array<Professional> {
    return this.professionals;
  }
  public set setProfessionals(professionals: Array<Professional>) {
    this.professionals = professionals;
  }

  public get getSchedule(): Schedule {
    return this.schedule;
  }
  public set setSchedule(schedule: Schedule) {
    this.schedule = schedule;
  }
}
