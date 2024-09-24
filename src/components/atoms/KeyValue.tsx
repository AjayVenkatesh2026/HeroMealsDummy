import {StyleSheet, Text, View} from 'react-native';
import React, {type FC} from 'react';

import containers from 'src/styles/containers';
import font from 'src/styles/font';
import type {IKeyValueProps} from 'src/types/atoms';

const KeyValue: FC<IKeyValueProps> = ({
  name,
  value,
  keyStyles,
  valueStyles,
  style,
  ...restProps
}) => {
  return (
    <View {...restProps} style={[styles.container, style]}>
      <Text style={[styles.name, keyStyles]}>{name}</Text>
      <Text style={valueStyles}>{value}</Text>
    </View>
  );
};

export default KeyValue;

const styles = StyleSheet.create({
  container: {
    ...containers.rowCenterBetween,
    padding: 4,
  },
  name: {
    ...font.medium,
    fontSize: 12,
  },
  value: {
    ...font.medium,
    fontSize: 12,
  },
});
