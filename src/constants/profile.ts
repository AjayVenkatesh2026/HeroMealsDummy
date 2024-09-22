import {INavigation, IProfileOption} from 'src/types/global';
import screenNames from './screenNames';
import {
  ACCOUNT_OUTLINE,
  CART_OUTLINE,
  INFORMATION_OUTLINE,
  POWER,
} from './icons';

const {bottomTabScreenNames} = screenNames;

const options: IProfileOption[] = [
  {
    id: 'your-profile',
    icon: ACCOUNT_OUTLINE,
    name: 'Your Profile',
    onClick: ({}) => {},
    trailingIcon: 'chevron-right',
  },
  {
    id: 'your-orders',
    icon: CART_OUTLINE,
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
    icon: INFORMATION_OUTLINE,
    name: 'About',
    onClick: ({}) => {},
    trailingIcon: 'chevron-right',
  },
  {
    id: 'sign-out',
    icon: POWER,
    name: 'Sign Out',
    onClick: ({}) => {},
    trailingIcon: 'chevron-right',
  },
];

export {options};
