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

export type {IProductsQuantitiesProps, TItem, IRestaurantDetailsCardProps};
