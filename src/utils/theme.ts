import type {ColorValue} from 'react-native';

import type {Style} from 'src/types/global';

const getThemedStyles = ({
  backgroundColor,
  color,
  borderColor,
}: {
  backgroundColor?: ColorValue;
  color?: ColorValue;
  borderColor?: ColorValue;
}): Style => {
  return {
    backgroundColor,
    color,
    borderColor,
  };
};

export {getThemedStyles};
