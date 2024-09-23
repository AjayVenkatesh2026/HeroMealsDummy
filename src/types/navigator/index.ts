import type {NavigatorScreenParams} from '@react-navigation/native';
import {IRestaurant} from '../ordering';

type BottomTabOption = {
  icon: string;
  tabBarLabel: string;
};

type AuthStackParamList = {
  LoginScreen: undefined;
};

type BottomTabParamList = {
  HomeScreen: BottomTabOption;
  OrderHistoryScreen: BottomTabOption;
  ProfileScreen: BottomTabOption;
};

type ProductStackParamList = {
  ProductsScreen: {
    restaurant: IRestaurant;
  };
};

type RootStackParamList = {
  SplashScreen: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  ProductStack: NavigatorScreenParams<ProductStackParamList>;
};

type RootStackScreens =
  | 'SplashScreen'
  | 'AuthStack'
  | 'BottomTab'
  | 'ProductStack';

type AuthStackScreens = 'LoginScreen';

type BottomTabScreens = 'HomeScreen' | 'OrderHistoryScreen' | 'ProfileScreen';

type ProductStackScreens = 'ProductsScreen';

interface ITab {
  name: BottomTabScreens;
  component: () => React.JSX.Element;
  color?: string;
  options: BottomTabOption;
}

export type {
  AuthStackParamList,
  RootStackParamList,
  BottomTabParamList,
  RootStackScreens,
  AuthStackScreens,
  BottomTabScreens,
  BottomTabOption,
  ProductStackParamList,
  ProductStackScreens,
  ITab,
};
