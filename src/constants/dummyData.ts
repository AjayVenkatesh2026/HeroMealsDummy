import type {
  IAddress,
  IProfile,
  IRestaurant,
  IOrder,
  IProduct,
  IBanner,
  ICategory,
  IMerchant,
} from 'src/types/ordering';

import banner1 from 'src/assets/banners/banner-1.png';
import banner2 from 'src/assets/banners/banner-2.png';
import banner3 from 'src/assets/banners/banner-3.png';
import mer1 from 'src/assets/merchants/saladstop.png';
import mer2 from 'src/assets/merchants/robinsons.png';
import mer3 from 'src/assets/merchants/the-french.png';
import mer4 from 'src/assets/merchants/army-navy.png';
import mer5 from 'src/assets/merchants/krispy-kreme.png';

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
  phone_number: '9848452084',
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
    tags: ['Salad Bags', 'Healthy'],
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
    tags: ['Pastries Bags', 'Top Deals'],
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
    tags: [],
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

const dummyProducts: IProduct[] = [
  {
    id: 'prod-1',
    name: 'Chicken Biryanai',
    price: 280,
    description: 'Qui elit non sit duis veniam duis consectetur sit.',
    rating: 3.5,
    num_of_ratings: 200,
    restaurant_id: '1',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 'prod-2',
    name: 'Chicken 65',
    price: 280,
    description:
      'Ex magna occaecat magna eiusmod ipsum cupidatat labore adipisicing aliquip reprehenderit quis anim anim veniam. Dolor duis enim deserunt amet aliquip dolore officia ipsum cillum nulla. Et eu tempor voluptate incididunt aute proident incididunt nostrud non sint. Anim labore cillum eiusmod ut labore.',
    rating: 4.3,
    num_of_ratings: 1200,
    restaurant_id: '2',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const DUMMY_BILL_BREAKDOWN = {
  DELIVERY_CHARGE: 25,
  PLATFORM_FEE: 6,
  TAX: 10,
};

const banners: IBanner[] = [
  {
    id: 'banner-1',
    source: banner1,
  },
  {
    id: 'banner-2',
    source: banner2,
  },
  {
    id: 'banner-3',
    source: banner3,
  },
];

const categories: ICategory[] = [
  {
    id: 'cat-1',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Available now',
  },
  {
    id: 'cat-2',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Near me',
  },
  {
    id: 'cat-3',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Top Deals',
  },
  {
    id: 'cat-4',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Groceries',
  },
  {
    id: 'cat-5',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Best Reviews',
  },
  {
    id: 'cat-6',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Meals',
  },
  {
    id: 'cat-7',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Pastries',
  },
  {
    id: 'cat-8',
    image:
      'https://5.imimg.com/data5/SA/HH/BP/SELLER-15290474/food-packaging-paper-bags.jpg',
    name: 'Healthy',
  },
];

const dummyMerchants: IMerchant[] = [
  {
    id: 'mer-1',
    image: mer1,
    name: 'SaladStop!',
  },
  {
    id: 'mer-2',
    image: mer2,
    name: 'Robinsons Supermarket!',
  },
  {
    id: 'mer-3',
    image: mer3,
    name: 'The French',
  },
  {
    id: 'mer-4',
    image: mer4,
    name: 'Army Navy',
  },
  {
    id: 'mer-5',
    image: mer5,
    name: 'Krispy Kreme!',
  },
];

export {
  dummyProfile,
  dummyRestaurantsList,
  dummyOrders,
  dummyProducts,
  DUMMY_BILL_BREAKDOWN,
  banners,
  categories,
  dummyMerchants,
};
