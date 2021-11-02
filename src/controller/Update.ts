import { Subsidiary } from '../model/Subsidiary';

export abstract class Update {
  protected abstract updateWithConfirmation(
    subsidiary: Subsidiary,
    cpf: number
  ): void;

  public abstract update(clientCpf: number, subsidiary: Subsidiary): void;
}
