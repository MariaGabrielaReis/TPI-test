import { Subsidiary } from '../model/Subsidiary';
import { Product } from '../model/Product';

export const populateProducts = (subsidiary: Subsidiary) => {
  const products = subsidiary.getProducts;

  productsMock.forEach(productMock => {
    let name = productMock.name;
    let type = productMock.type;
    let brand = productMock.brand;
    let value = productMock.value;
    let expirationDate = productMock.expirationDate;

    const newProduct = new Product(name, type, brand, value, expirationDate);

    products.push(newProduct);
  });

  subsidiary.setProducts(products);
};

const productsMock = [
  {
    name: 'Shampoo 500ml Abacaxi',
    type: 'Shampoo',
    brand: 'Jhon & Jhon',
    value: 14.75,
    expirationDate: '21/12/2021',
  },
  {
    name: 'Condicionador 300ml Abacaxi',
    type: 'Condicionador',
    brand: 'Jhon & Jhon',
    value: 20.25,
    expirationDate: '21/12/2021',
  },
  {
    name: 'Creme para pentear 500ml Abacaxi',
    type: 'Creme para pentear',
    brand: 'Jhon & Jhon',
    value: 10.5,
    expirationDate: '21/12/2021',
  },
  {
    name: 'Creme hidratação 100ml Morango',
    type: 'Creme hidratação',
    brand: 'Jhon & Jhon',
    value: 7.2,
    expirationDate: '21/12/2021',
  },
  {
    name: 'Creme nutrição 100ml Maracujá',
    type: 'Creme nutritação',
    brand: 'Jhon & Jhon',
    value: 8.5,
    expirationDate: '21/12/2021',
  },
  {
    name: 'Creme reconstrução 100ml Banana',
    type: 'Creme reconstrução',
    brand: 'Jhon & Jhon',
    value: 10.35,
    expirationDate: '21/12/2021',
  },
];
