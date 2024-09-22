import type {RootStackScreens, AuthStackScreens} from 'src/types/navigator';

const rootStackScreenNames: {[key in RootStackScreens]: RootStackScreens} = {
  SplashScreen: 'SplashScreen',
  AuthStack: 'AuthStack',
};

const loginStackScreenNames: {[key in AuthStackScreens]: AuthStackScreens} = {
  LoginScreen: 'LoginScreen',
};

const screenNames = {
  rootStackScreenNames,
  loginStackScreenNames,
};

export default screenNames;
