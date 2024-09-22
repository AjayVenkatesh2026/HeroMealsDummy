import {IProfile, IRestaurant} from 'src/types/ordering';

const dummyProfile: IProfile = {
  id: 'id',
  name: 'John Doe',
  token: 'token',
  gender: 'Male',
  image: '',
  address: {
    landmark: "Near St. John's Library",
    line_1: 'Luxary Residence, 5nd Floor, 504, 4560 Creek Rd',
    line_2: 'Lewiston, New York, United States',
    pin_code: '14092',
    latitude: '43.194012',
    longitude: '-79.022338',
  },
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
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '1 km',
    duration: 20,
    name: 'Restaurant 2',
    rating: 4.7,
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1603122876935-13e7f40c3984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    distance: '1 km',
    duration: 20,
    name: 'Restaurant 3',
    rating: 4.7,
  },
];

export {dummyProfile, dummyRestaurantsList};
