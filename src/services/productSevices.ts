import ProductModel from '../models/productModel';

export default class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel();
  }

  async findAll() {
    const products = await this.model.findAll();
    return products;
  }
}