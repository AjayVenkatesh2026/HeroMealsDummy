import HomeScreen from 'src/components/screens/HomeScreen/HomeScreen';
import OrderHistoryScreen from 'src/components/screens/OrderHistoryScreen/OrderHistoryScreen';
import ProfileScreen from 'src/components/screens/ProfileScreen/ProfileScreen';
import type {ITab} from 'src/types/navigator';
import {ACCOUNT, HISTORY, HOME} from './icons';

const tabs: ITab[] = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
    color: 'pink',
    options: {
      icon: HOME,
      tabBarLabel: 'Home',
    },
  },
  {
    name: 'OrderHistoryScreen',
    component: OrderHistoryScreen,
    options: {
      icon: HISTORY,
      tabBarLabel: 'Orders',
    },
  },
  {
    name: 'ProfileScreen',
    component: ProfileScreen,
    options: {
      icon: ACCOUNT,
      tabBarLabel: 'Profile',
    },
  },
];

export {tabs};
