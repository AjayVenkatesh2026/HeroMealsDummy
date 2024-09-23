import type {INavigation, IProfileOption} from 'src/types/global';
import screenNames from './screenNames';
import {
  ACCOUNT_OUTLINE,
  CART_OUTLINE,
  INFORMATION_OUTLINE,
  POWER,
  CHEVRON_RIGHT,
} from './icons';
import copies from './copies';

const {bottomTabScreenNames} = screenNames;
const {YOUR_PROFILE, YOUR_ORDERS, ABOUT, SIGN_OUT} = copies;

const options: IProfileOption[] = [
  {
    id: 'your-profile',
    icon: ACCOUNT_OUTLINE,
    name: YOUR_PROFILE,
    onClick: ({}) => {},
    trailingIcon: CHEVRON_RIGHT,
  },
  {
    id: 'your-orders',
    icon: CART_OUTLINE,
    name: YOUR_ORDERS,
    onClick: ({navigation}: {navigation: INavigation}) => {
      navigation?.navigate(bottomTabScreenNames.OrderHistoryScreen);
    },
    trailingIcon: CHEVRON_RIGHT,
  },
  // {
  //   icon: 'book-outline',
  //   name: 'Address',
  //   onClick: ({navigation}) => {},
  // },
  {
    id: 'about',
    icon: INFORMATION_OUTLINE,
    name: ABOUT,
    onClick: ({}) => {},
    trailingIcon: CHEVRON_RIGHT,
  },
  {
    id: 'sign-out',
    icon: POWER,
    name: SIGN_OUT,
    onClick: ({}) => {},
    trailingIcon: CHEVRON_RIGHT,
  },
];

export {options};
