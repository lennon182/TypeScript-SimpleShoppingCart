import { ICartItem, IOrder } from './../models/Cart.js';
import { IProduct } from './../models/Product.js';

interface ICart {
  cartItems: ICartItem[];

  add(item: ICartItem): any;
  getItems(): ICartItem[];
  deleteItem(_id: string): void;
  getGranTotal(): number;
}

export class Cart implements ICart {
  cartItems: ICartItem[] = [];
  granTotal: number = 0;
  cartItemsTotal: number = 0;
  resp = { msg: '', status: false };

  constructor() {}

  add(item: ICartItem) {
    const filterExist = this.cartItems.filter((el) => {
      return el._id === item._id;
    });

    filterExist.length === 0
      ? (this.cartItems.unshift(item),
        (this.resp.msg = 'Adding OK'),
        (this.resp.status = true))
      : ((this.resp.msg = 'Adding FALSE'),
        (this.resp.status = false),
        (filterExist[0].quantity = filterExist[0].quantity + item.quantity),
        (filterExist[0].price = filterExist[0].price + item.price));
    return this.resp;
  }

  getItems(): ICartItem[] {
    return this.cartItems;
  }
  deleteItem(_id: string): Object {
    const filterExist = this.cartItems.filter((el) => {
      return el._id !== _id;
    });

    this.cartItems = filterExist;

    (this.resp.msg = 'Adding OK'), (this.resp.status = true);

    return this.resp;
  }

  getGranTotal(): number {
    const reducer = (ac: number, value: ICartItem) => ac + value.price;
    const granTotalTemp = this.cartItems.reduce(reducer, 0);
    this.granTotal = granTotalTemp;

    return this.granTotal;
  }

  getCartItemsTotal(): number {
    this.cartItemsTotal = this.cartItems.length;
    return this.cartItemsTotal;
  }

  checkOut(): Object {
    this.cartItems = [];

    this.resp.status = true;
    this.resp.msg = 'Pay Ok...';

    return this.resp;
  }
}
