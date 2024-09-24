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
  phone_number: string;
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
  description: string;
  rating: number;
  num_of_ratings: number;
  image: string;
  restaurant_id: string;
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

interface IOrderProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface IOrderPayment {
  id: string;
  payment_method: string;
}

type OrderStatus = 'Pending' | 'Cancelled' | 'Placed' | 'Delivered';

interface ICartProduct {
  details: IProduct;
  quantity: number;
}

interface IBillBreakdown {
  itemTotal: number;
  deliveryFee?: number;
  tax?: number;
  platformFee?: number;
}

interface ICartData {
  restaurant: IRestaurant | null;
  products?: ICartProduct[];
  orderData: IBillBreakdown;
}

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

export type {
  IProfile,
  IAddress,
  IRestaurant,
  IOrder,
  IOrderProduct,
  IProduct,
  ICartProduct,
  ICartData,
  IBillBreakdown,
};
