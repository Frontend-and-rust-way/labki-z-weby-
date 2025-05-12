export interface IBook {
  title: string;
  author: string;
  price: number;
  rating: number;
  imageUrl: string;  
}

export interface IBasketPurchase {
  index: number;
  src: string;
  title: string;
  author: string;
  price: string | number;
  type: string;
  isExists: unknown;
  code: number;
}

export interface IBusket {
  className?: string;
  children?: string;
}
