import type {TextStyle, ViewStyle} from 'react-native';

import containers from 'src/styles/containers';
import font from 'src/styles/font';

const buttonStyles: ViewStyle = {
  ...containers.rowCenterCenter,
  paddingVertical: 12,
  paddingHorizontal: 16,
  borderRadius: 8,
};

const buttonTextStyles: TextStyle = {
  ...font.medium,
  fontSize: 14,
  letterSpacing: 0.25,
};

const button = {
  buttonStyles,
  buttonTextStyles,
};

export {button};
