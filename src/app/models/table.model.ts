import { Product } from './product.model'

export class Table {
  products: Product[];
  getProduct: (id: string) => Product;
  createProduct: (name: string) => void;

  constructor(id: string, name: string) {
    this.products = [];
    this.getProduct = (id) => {
      return this.products.find(prod => prod.id === id);
    }
    this.createProduct = (name) => {
      const productCount = this.products.filter(product => !product.id.includes('-')).length;
      this.products.push(new Product(String(productCount), name))
    }
  }
}
