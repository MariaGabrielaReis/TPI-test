import { Subsidiary } from '../model/Subsidiary';

export abstract class Delete {
  protected abstract deleteWithConfirmation(
    subsidiary: Subsidiary,
    cpf: number
  ): void;

  public abstract delete(clientCpf: number, subsidiary: Subsidiary): void;
}
