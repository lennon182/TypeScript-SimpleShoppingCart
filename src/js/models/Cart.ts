export interface ICartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IOrder {
  products: ICartItem[];
  grandTotal: number;
}
