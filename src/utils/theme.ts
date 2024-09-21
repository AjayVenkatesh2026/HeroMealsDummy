import type {ColorValue} from 'react-native';

import type {Style} from 'src/interfaces/global';

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
