import { Client } from './Client';
import { Product } from './Product';
import { Professional } from './Professional';
import { Schedule } from './Schedule';
import { Service } from './Service';

export class Subsidiary {
  public name: string;
  public clients?: Client[];
  public products?: Product[];
  public services?: Service[];
  public professionals?: Professional[];
  public schedule?: Schedule;

  constructor(
    name: string,
    clients?: Client[],
    products?: Product[],
    services?: Service[],
    professionals?: Professional[],
    schedule?: Schedule
  ) {
    this.name = name;
    if (
      clients !== undefined &&
      products !== undefined &&
      services !== undefined &&
      professionals !== undefined &&
      schedule !== undefined
    ) {
      this.clients = clients;
      this.products = products;
      this.services = services;
      this.professionals = professionals;
      this.schedule = schedule;
    }
  }

  // GETTERS & SETTERS
  public get getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }

  public get getClients(): Client[] {
    return this.clients || [];
  }
  public setClients(clients: Client[]) {
    this.clients = clients;
  }

  public get getProducts(): Product[] {
    return this.products || [];
  }
  public setProducts(products: Product[]) {
    this.products = products;
  }

  public get getServices(): Service[] {
    return this.services || [];
  }
  public setServices(services: Service[]) {
    this.services = services;
  }

  public get getProfessionals(): Professional[] {
    return this.professionals || [];
  }
  public setProfessionals(professionals: Professional[]) {
    this.professionals = professionals;
  }

  public get getSchedule(): Schedule | undefined {
    return this.schedule;
  }
  public setSchedule(schedule: Schedule) {
    this.schedule = schedule;
  }
}
