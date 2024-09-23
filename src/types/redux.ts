import type {ICartProduct} from './ordering';

interface ICartSlice {
  products: {[key: string]: ICartProduct};
}

export type {ICartSlice};
