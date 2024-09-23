import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import type {ISeparator} from 'src/types/atoms';

const Separator: FC<ISeparator> = ({style}) => {
  return <View style={[styles.separator, style]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 12,
  },
});

export default Separator;
