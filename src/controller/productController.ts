import { Request, Response } from 'express';
import ProductService from '../services/productServices';

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  create = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productService.create(product);
    res.status(201).json(newProduct);
  };

  async findAll(req: Request, res: Response) {
    const products = await this.productService.findAll();
    res.status(200).json(products);
  }
}