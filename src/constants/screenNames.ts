import type {
  RootStackScreens,
  AuthStackScreens,
  BottomTabScreens,
} from 'src/types/navigator';

const rootStackScreenNames: {[key in RootStackScreens]: RootStackScreens} = {
  SplashScreen: 'SplashScreen',
  AuthStack: 'AuthStack',
  BottomTab: 'BottomTab',
};

const loginStackScreenNames: {[key in AuthStackScreens]: AuthStackScreens} = {
  LoginScreen: 'LoginScreen',
};

const bottomTabScreenNames: {[key in BottomTabScreens]: BottomTabScreens} = {
  HomeScreen: 'HomeScreen',
  OrderHistoryScreen: 'OrderHistoryScreen',
  ProfileScreen: 'ProfileScreen',
};

const screenNames = {
  rootStackScreenNames,
  loginStackScreenNames,
  bottomTabScreenNames,
};

export default screenNames;
