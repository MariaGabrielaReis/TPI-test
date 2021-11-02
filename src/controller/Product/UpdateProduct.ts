import { Input } from '../../utils/Input';
import { Phone } from '../../model/Phone';
import { Product } from '../../model/Product';
import { Subsidiary } from '../../model/Subsidiary';
import { Update } from '../Update';

export class UpdateProduct extends Update {
  public input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  protected updateWithConfirmation(subsidiary: Subsidiary, id: number) {
    const updatedProducts: Product[] = [];
    subsidiary.getProducts.forEach(product => {
      if (product.id === id) {
        product.setName(this.input.receiveText(`Novo nome: `));
        product.setType(this.input.receiveText(`Novo tipo: `));
        product.setValue(this.input.receiveNumber(`Novo valor: `));
      }

      updatedProducts.push(product);
    });
    subsidiary.setProducts(updatedProducts);
  }

  public update(productId: number, subsidiary: Subsidiary): void {
    console.log(
      `\nAtualização de cadastro de produto -----------------------------`
    );

    this.updateWithConfirmation(subsidiary, productId);

    let moreUpdate = this.input
      .receiveText(`Deseja atualizar mais algum produto? [s/n] `)
      .toLowerCase();
    while (moreUpdate === 's') {
      const id = this.input.receiveNumber(`Código para atualizar: `);
      this.updateWithConfirmation(subsidiary, id);

      moreUpdate = this.input
        .receiveText(`Deseja atualizar mais algum produto? [s/n] `)
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
