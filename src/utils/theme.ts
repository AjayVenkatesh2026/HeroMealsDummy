import {ColorValue, ImageStyle, TextStyle, ViewStyle} from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle;

const getThemedStyles = ({
  backgroundColor,
  color,
}: {
  backgroundColor?: ColorValue;
  color?: ColorValue;
}): Style => {
  return {
    backgroundColor,
    color,
  };
};

export {getThemedStyles};
