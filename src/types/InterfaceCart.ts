interface IProducts {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
}

export interface ICart {
  id: number;
  products: IProducts[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface ICartData {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}
