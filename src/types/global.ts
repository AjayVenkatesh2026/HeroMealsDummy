import type {
  ImageStyle,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
  StyleProp,
  ImageProps,
} from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle;

interface IProfileOption {
  id: string;
  name: string;
  icon: string;
  onClick: Function;
  trailingIcon?: string;
}

interface INavigation {
  navigate: Function;
}

type THeaderProps = {
  leadingIcon?: string;
  trailingIcon?: string;
  onPressLeadingIcon?: (event?: GestureResponderEvent) => void;
  onPressTrailingIcon?: (event?: GestureResponderEvent) => void;
  trailingIconStyles?: Style;
  trailingIconLabel?: string;
  containerStyles?: StyleProp<ViewStyle>;
  showBack?: boolean;
  leadingIconColor?: string;
  showCart?: boolean;
};

interface FDAImage extends ImageProps {
  url?: string;
}

export type {Style, IProfileOption, INavigation, THeaderProps, FDAImage};
