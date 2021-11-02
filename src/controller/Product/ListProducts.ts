import { List } from '../List';
import { Subsidiary } from '../../model/Subsidiary';

export class ListProducts extends List {
  constructor() {
    super();
  }

  public list(subsidiary: Subsidiary): void {
    console.log(
      `\nLista de todos os produtos -------------------------------------`
    );

    const products = subsidiary.getProducts;
    products.forEach(product => {
      console.log(`
      Código: ${product.id}
      Nome: ${product.getName} (${product.brand})
      Valor: R$ ${product.getValue}
      Validade: ${product.expirationDate}
      -------------------------------------------
      `);
    });

    console.log(
      `\n----------------------------------------------------------------`
    );
  }
}
