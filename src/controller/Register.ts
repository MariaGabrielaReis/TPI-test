import { Subsidiary } from '../model/Subsidiary';

export abstract class Register {
  public abstract register(subsidiary: Subsidiary): void;
}
