import { Subsidiary } from '../model/Subsidiary';

export abstract class Create {
  public abstract create(subsidiary: Subsidiary): void;
}
