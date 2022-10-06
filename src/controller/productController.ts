import { Request, Response } from 'express';
import ProductService from '../services/productSevices';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async findAll(req: Request, res: Response) {
    const products = await this.productService.findAll();
    res.status(200).json(products);
  }
}