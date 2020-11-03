import { IProduct, dataStore } from './../models/Product.js';

interface IProductI {
  data: IProduct[];

  getProducts(): IProduct[];
}

export class Product implements IProductI {
  data: IProduct[] = dataStore;

  constructor() {}

  getProducts(): IProduct[] {
    return this.data;
  }
}
