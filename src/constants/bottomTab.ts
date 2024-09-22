import HomeScreen from 'src/components/screens/HomeScreen/HomeScreen';
import OrderHistoryScreen from 'src/components/screens/OrderHistoryScreen/OrderHistoryScreen';
import ProfileScreen from 'src/components/screens/ProfileScreen/ProfileScreen';
import type {ITab} from 'src/types/navigator';

const tabs: ITab[] = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    color: 'pink',
    options: {
      icon: 'home',
      tabBarLabel: 'Home',
    },
  },
  {
    name: 'OrderHistoryScreen',
    component: OrderHistoryScreen,
    options: {
      icon: 'history',
      tabBarLabel: 'Orders',
    },
  },
  {
    name: 'ProfileScreen',
    component: ProfileScreen,
    options: {
      icon: 'account',
      tabBarLabel: 'Profile',
    },
  },
];

export {tabs};
