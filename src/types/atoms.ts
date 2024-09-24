import type {StyleProp, ViewStyle} from 'react-native';

interface IQuantityXProductProps {
  quantity: number;
  name: string;
}
interface ISeparator {
  style?: StyleProp<ViewStyle>;
}

export type {IQuantityXProductProps, ISeparator};
