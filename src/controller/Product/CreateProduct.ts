import { Create } from '../Create';
import { Input } from '../../utils/Input';
import { Product } from '../../model/Product';
import { Subsidiary } from '../../model/Subsidiary';

export class CreateProduct extends Create {
  private input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  public create(subsidiary: Subsidiary): void {
    console.log(
      `\nCadastro de produto --------------------------------------------`
    );

    const name = this.input.receiveText(`Nome: `).toLowerCase();
    const type = this.input.receiveText(`Tipo: `).toLowerCase();
    const brand = this.input.receiveText(`Marca: `).toLowerCase();
    const value = this.input.receiveNumber(`Valor: R$`);
    const expirationDate = this.input.receiveText(`Validade: `);

    const newProduct = new Product(name, type, brand, value, expirationDate);

    const products = subsidiary.getProducts;
    products.push(newProduct);
    subsidiary.setProducts(products);

    console.log(`\nCadastro concluído com sucesso :)\n`);
    console.log(
      `----------------------------------------------------------------`
    );
  }
}
