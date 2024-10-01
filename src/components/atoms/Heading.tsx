import {View} from 'react-native';
import React, {type FC} from 'react';

import {Text} from 'react-native-paper';

import font from 'src/styles/font';
import type {IHeading} from 'src/types/atoms';

const Heading: FC<IHeading> = ({title, description, ...restProps}) => {
  return (
    <View {...restProps}>
      <Text variant="titleMedium" style={[font.semiBold]}>
        {title}
      </Text>
      <Text variant="bodyMedium" style={[font.regular]}>
        {description}
      </Text>
    </View>
  );
};

export default Heading;
