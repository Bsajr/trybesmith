import ProductModel from '../models/productModel';
import Product from '../interfaces/productInterface';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async create(product: Product) {
    return this.model.create(product);
  }

  async findAll() {
    const products = await this.model.findAll();
    return products;
  }
}