import type {IProduct} from './ordering';
import type {IBillBreakdown} from './ordering';

type TItem = {
  id: string;
  name: string;
  quantity: number;
};

interface IProductsQuantitiesProps {
  items: TItem[];
}

interface IRestaurantDetailsCardProps {
  image: string;
  name: string;
  description: string;
}

interface IProductItem {
  quantity: number;
  product: IProduct;
}

interface IBillBreakdownProps {
  data: IBillBreakdown;
}

export type {
  IProductsQuantitiesProps,
  TItem,
  IRestaurantDetailsCardProps,
  IProductItem,
  IBillBreakdownProps,
};
