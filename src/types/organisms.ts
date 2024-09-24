import type {StyleProp, ViewStyle} from 'react-native';

import type {ICartData, IProduct, IRestaurant} from './ordering';

interface RestaurantInCartProps {
  restaurantData: ICartData;
}

interface IQuantitySelectorProps {
  product: IProduct;
}

interface IRestaurantProps {
  restaurant: IRestaurant;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  showImage?: boolean;
  mode?: 'outlined' | 'contained' | 'elevated' | undefined;
}

export type {RestaurantInCartProps, IQuantitySelectorProps, IRestaurantProps};
