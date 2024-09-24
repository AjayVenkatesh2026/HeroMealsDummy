import type {StyleProp, ViewStyle, ViewProps, TextStyle} from 'react-native';

interface IQuantityXProductProps {
  quantity: number;
  name: string;
}
interface ISeparator {
  style?: StyleProp<ViewStyle>;
}

interface IHeading extends ViewProps {
  title: string;
  description: string;
}

interface IKeyValueProps extends ViewProps {
  name: string;
  value: string;
  keyStyles?: StyleProp<TextStyle>;
  valueStyles?: StyleProp<TextStyle>;
}

export type {IQuantityXProductProps, ISeparator, IHeading, IKeyValueProps};
