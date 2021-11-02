import { Subsidiary } from '../model/Subsidiary';

export abstract class Delete {
  protected abstract deleteWithConfirmation(
    subsidiary: Subsidiary,
    cpf: number
  ): void;

  public abstract delete(id: number, subsidiary: Subsidiary): void;
}
