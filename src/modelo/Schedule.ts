import { Client } from './Client';
import { Service } from './Service';
import { Professional } from './Professional';

export class Schedule {
  date: Date | null;
  client: Client;
  services: Array<Service>;
  professionals: Array<Professional>;
  totalValue: number;
  observations?: string;

  // sobrecarga de método (variações do construtor)
  constructor(
    date: Date,
    client: Client,
    services: Array<Service>,
    professionals: Array<Professional>,
    totalValue: number
  );
  constructor(
    date: Date,
    client: Client,
    services: Array<Service>,
    professionals: Array<Professional>,
    totalValue: number,
    observations: string
  );
  constructor(
    date: Date,
    client: Client,
    services: Array<Service>,
    professionals: Array<Professional>,
    totalValue: number,
    observations?: string
  ) {
    this.date = date;
    this.client = client;
    this.services = services;
    this.professionals = professionals;
    this.totalValue = totalValue;
    if (observations !== undefined) {
      this.observations = observations;
    }
  }

  // GETTERS & SETTERS
  public get getDate(): Date | null {
    return this.date;
  }
  public cancelAppointment(): string {
    this.date = null;
    return 'Horário cancelado!';
  }
  public reschedule(newDate: Date): string {
    this.date = newDate;
    return `Remarcado o horário de ${this.getClient.name} para ${newDate}`;
  }

  public get getClient(): Client {
    return this.client;
  }
  public set setClient(client: Client) {
    this.client = client;
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

  public get getTotalValue(): number {
    return this.totalValue;
  }
  public set setTotalValue(totalValue: number) {
    this.totalValue = totalValue;
  }

  public get getObservations(): string | null | undefined {
    return this.observations;
  }
  public set setObservations(observation: string) {
    this.observations = observation;
  }
}
