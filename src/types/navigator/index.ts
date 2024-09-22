import type {NavigatorScreenParams} from '@react-navigation/native';

type AuthStackParamList = {
  LoginScreen: undefined;
};

type RootStackParamList = {
  SplashScreen: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

type RootStackScreens = 'SplashScreen' | 'AuthStack';

type AuthStackScreens = 'LoginScreen';

export type {
  AuthStackParamList,
  RootStackParamList,
  RootStackScreens,
  AuthStackScreens,
};
