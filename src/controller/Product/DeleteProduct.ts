import { Delete } from '../Delete';
import { Input } from '../../utils/Input';
import { Product } from '../../model/Product';
import { Subsidiary } from '../../model/Subsidiary';

export class DeleteProduct extends Delete {
  public input: Input;

  constructor() {
    super();
    this.input = new Input();
  }

  protected deleteWithConfirmation(subsidiary: Subsidiary, id: number) {
    let productToDelete;
    subsidiary.getProducts.map(product => {
      if (product.id === id) {
        productToDelete = product;
      }
    });

    let confirmation = this.input
      .receiveText(
        ` Tem certeza que deseja excluir ${productToDelete.getName}, da marca ${productToDelete.brand}? [s/n] `
      )
      .toLowerCase();

    if (confirmation === 's') {
      let updatedProducts: Product[] = [];
      subsidiary.getProducts.map(product => {
        if (product.id !== id) {
          updatedProducts.push(product);
        }
      });
      subsidiary.setProducts(updatedProducts);
      console.log(`\nExclusão concluída com sucesso! :)`);
      console.log(
        '----------------------------------------------------------------'
      );
    } else {
      console.log(`\nTarefa cancelada com sucesso! :)`);
      console.log(
        '----------------------------------------------------------------'
      );
    }
  }

  public delete(productId: number, subsidiary: Subsidiary): void {
    console.log(
      `\nExclusão de produto ---------------------------------------------`
    );
    this.deleteWithConfirmation(subsidiary, productId);

    let moreDelete = this.input
      .receiveText(`Deseja excluir mais algum produto? [s/n] `)
      .toLowerCase();
    while (moreDelete === 's') {
      const id = this.input.receiveNumber(`Código do produto a excluir: `);
      this.deleteWithConfirmation(subsidiary, id);

      moreDelete = this.input
        .receiveText(`Deseja excluir mais algum produto? [s/n] `)
        .toLowerCase();
    }

    console.log(
      `----------------------------------------------------------------`
    );
  }
}
