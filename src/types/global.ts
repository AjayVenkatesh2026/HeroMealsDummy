import type {
  ImageStyle,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
  StyleProp,
  ImageProps,
} from 'react-native';
import {ITheme} from './theme';

type Style = ViewStyle | TextStyle | ImageStyle;

type TProfileType = 'Title' | 'Option';

type TProfileOptionTypeOption = {
  type: 'Option';
  icon: string;
  onClick: Function;
  trailingIcon?: string;
  iconColor?: keyof ITheme;
};

type TProfileOptionTypeTitle = {
  type: 'Title';
};

type TProfileOption = {id: string; name: string} & (
  | TProfileOptionTypeOption
  | TProfileOptionTypeTitle
);

interface INavigation {
  navigate: Function;
}

type THeaderProps = {
  leadingIcon?: string;
  trailingIcon?: string;
  onPressLeadingIcon?: (event?: GestureResponderEvent) => void;
  onPressTrailingIcon?: (event?: GestureResponderEvent) => void;
  trailingIconStyles?: StyleProp<Style>;
  trailingIconLabel?: string;
  containerStyles?: StyleProp<ViewStyle>;
  showBack?: boolean;
  leadingIconColor?: string;
  showCart?: boolean;
};

interface FDAImage extends ImageProps {
  url?: string;
}

export type {
  Style,
  TProfileOption,
  TProfileType,
  INavigation,
  THeaderProps,
  FDAImage,
};
