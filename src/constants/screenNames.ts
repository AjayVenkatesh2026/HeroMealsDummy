import type {
  RootStackScreens,
  AuthStackScreens,
  BottomTabScreens,
  ProductStackScreens,
  OrderStackScreens,
} from 'src/types/navigator';

const rootStackScreenNames: {[key in RootStackScreens]: RootStackScreens} = {
  SplashScreen: 'SplashScreen',
  AuthStack: 'AuthStack',
  BottomTab: 'BottomTab',
  ProductStack: 'ProductStack',
  OrderStack: 'OrderStack',
  OnboardingScreen: 'OnboardingScreen',
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

const orderStackScreenNames: {
  [key in OrderStackScreens]: OrderStackScreens;
} = {
  CartHomeScreen: 'CartHomeScreen',
  OrderDetails: 'OrderDetails',
};

const screenNames = {
  rootStackScreenNames,
  loginStackScreenNames,
  bottomTabScreenNames,
  productStackScreenNames,
  orderStackScreenNames,
};

export default screenNames;
