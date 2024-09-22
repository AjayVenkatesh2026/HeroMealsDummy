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
}

export type {IProfile, IAddress, IRestaurant};
