import {INavigation, IProfileOption} from 'src/types/global';
import screenNames from './screenNames';

const {bottomTabScreenNames} = screenNames;

const options: IProfileOption[] = [
  {
    id: 'your-profile',
    icon: 'account-outline',
    name: 'Your Profile',
    onClick: ({}) => {},
    trailingIcon: 'chevron-right',
  },
  {
    id: 'your-orders',
    icon: 'cart-outline',
    name: 'Your Orders',
    onClick: ({navigation}: {navigation: INavigation}) => {
      navigation?.navigate(bottomTabScreenNames.OrderHistoryScreen);
    },
    trailingIcon: 'chevron-right',
  },
  // {
  //   icon: 'book-outline',
  //   name: 'Address',
  //   onClick: ({navigation}) => {},
  // },
  {
    id: 'about',
    icon: 'information-outline',
    name: 'About',
    onClick: ({}) => {},
    trailingIcon: 'chevron-right',
  },
  {
    id: 'sign-out',
    icon: 'power',
    name: 'Sign Out',
    onClick: ({}) => {},
    trailingIcon: 'chevron-right',
  },
];

export {options};
