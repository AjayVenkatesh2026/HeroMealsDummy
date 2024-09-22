import type {ImageStyle, TextStyle, ViewStyle} from 'react-native';

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

export type {Style, IProfileOption, INavigation};
