import promptSync from 'prompt-sync';

export class Input {
  public receiveNumber(mensage: string): number {
    const prompt = promptSync();
    const value = new Number(prompt(mensage));
    return value.valueOf();
  }

  public receiveText(mensage: string): string {
    const prompt = promptSync();
    return prompt(mensage);
  }
}
