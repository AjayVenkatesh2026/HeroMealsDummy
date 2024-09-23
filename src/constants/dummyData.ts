import type {IAddress, IProfile, IRestaurant, IOrder} from 'src/types/ordering';

const dummyAddress: IAddress = {
  landmark: "Near St. John's Library",
  line_1: 'Luxary Residence, 5nd Floor, 504, 4560 Creek Rd',
  line_2: 'Lewiston, New York, United States',
  pin_code: '14092',
  latitude: '43.194012',
  longitude: '-79.022338',
};

const dummyProfile: IProfile = {
  id: 'id',
  name: 'John Doe',
  token: 'token',
  gender: 'Male',
  image: '',
  address: dummyAddress,
};

const dummyRestaurantsList: IRestaurant[] = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '1 km',
    duration: 20,
    name: 'Restaurant 1',
    rating: 4.7,
    address: dummyAddress,
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '1 km',
    duration: 20,
    name: 'Restaurant 2',
    rating: 4.7,
    address: dummyAddress,
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '1 km',
    duration: 20,
    name: 'Restaurant 3',
    rating: 4.7,
    address: dummyAddress,
  },
];

const dummyOrders: IOrder[] = [
  {
    id: '1',
    order_status: 'Delivered',
    order_total: 406.08,
    delivered_at: '2024-09-22T15:57:35.598Z',
    taxes: 20.08,
    delivery_fee: 0,
    restaurant: {
      id: 'res-1',
      name: 'Restaurant 1',
      image:
        'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: dummyAddress,
    },
    products: [
      {
        id: 'prod-1',
        quantity: 1,
        name: 'Chicken Fried Rice',
        price: 190,
      },
      {
        id: 'prod-2',
        quantity: 1,
        name: 'Chicken Manchuria',
        price: 190,
      },
    ],
    payment: {
      id: 'payment-id',
      payment_method: 'upi',
    },
  },
  {
    id: '2',
    order_status: 'Delivered',
    order_total: 406.08,
    delivered_at: '2024-09-22T15:57:35.598Z',
    taxes: 20.08,
    delivery_fee: 0,
    restaurant: {
      id: 'res-1',
      name: 'Restaurant 2',
      image:
        'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      address: dummyAddress,
    },
    products: [
      {
        id: 'prod-1',
        quantity: 1,
        name: 'Egg Fried Rice',
        price: 190,
      },
      {
        id: 'prod-2',
        quantity: 1,
        name: 'Veg Manchuria',
        price: 190,
      },
    ],
    payment: {
      id: 'payment-id',
      payment_method: 'upi',
    },
  },
];

export {dummyProfile, dummyRestaurantsList, dummyOrders};