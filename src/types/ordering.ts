import {TDateISO} from './date';

interface IAddress {
  landmark: string;
  line_1: string;
  line_2: string;
  pin_code: string;
  latitude?: string;
  longitude?: string;
}
interface IProfile {
  id: string;
  name: string;
  image?: string;
  gender: string;
  token: string;
  address: IAddress;
}

interface IRestaurant {
  id: string;
  image: string;
  distance: string;
  duration: number;
  name: string;
  rating: number;
  address: IAddress;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
}

interface IOrderRestaurant {
  id: string;
  image: string;
  name: string;
  address: IAddress;
  distance?: string;
  duration?: number;
  rating?: number;
}

interface IOrderProduct extends IProduct {
  quantity: number;
}

interface IOrderPayment {
  id: string;
  payment_method: string;
}

type OrderStatus = 'Pending' | 'Cancelled' | 'Placed' | 'Delivered';

interface IOrder {
  id: string;
  order_status: OrderStatus;
  order_total: number;
  delivered_at: TDateISO;
  taxes: number;
  delivery_fee: number;
  restaurant: IOrderRestaurant;
  products: IOrderProduct[];
  payment: IOrderPayment;
}

export type {IProfile, IAddress, IRestaurant, IOrder, IOrderProduct};