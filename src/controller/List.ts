import { Subsidiary } from '../model/Subsidiary';

export abstract class List {
  public abstract list(subsidiary: Subsidiary): void;
}
