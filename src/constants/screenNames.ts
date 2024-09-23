import type {
  RootStackScreens,
  AuthStackScreens,
  BottomTabScreens,
  ProductStackScreens,
} from 'src/types/navigator';

const rootStackScreenNames: {[key in RootStackScreens]: RootStackScreens} = {
  SplashScreen: 'SplashScreen',
  AuthStack: 'AuthStack',
  BottomTab: 'BottomTab',
  ProductStack: 'ProductStack',
};

const loginStackScreenNames: {[key in AuthStackScreens]: AuthStackScreens} = {
  LoginScreen: 'LoginScreen',
};

const bottomTabScreenNames: {[key in BottomTabScreens]: BottomTabScreens} = {
  HomeScreen: 'HomeScreen',
  OrderHistoryScreen: 'OrderHistoryScreen',
  ProfileScreen: 'ProfileScreen',
};

const productStackScreenNames: {
  [key in ProductStackScreens]: ProductStackScreens;
} = {
  ProductsScreen: 'ProductsScreen',
};

const screenNames = {
  rootStackScreenNames,
  loginStackScreenNames,
  bottomTabScreenNames,
  productStackScreenNames,
};

export default screenNames;
