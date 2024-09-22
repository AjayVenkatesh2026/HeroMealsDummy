import type {NavigatorScreenParams} from '@react-navigation/native';

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

type RootStackParamList = {
  SplashScreen: undefined;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

type RootStackScreens = 'SplashScreen' | 'AuthStack' | 'BottomTab';

type AuthStackScreens = 'LoginScreen';

type BottomTabScreens = 'HomeScreen' | 'OrderHistoryScreen' | 'ProfileScreen';

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
  ITab,
};
