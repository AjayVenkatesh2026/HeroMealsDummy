import {StyleSheet, Text} from 'react-native';
import React from 'react';

import {getThemedStyles} from 'src/utils/theme';
import {useAppSelector} from 'src/hooks/reduxHooks';
import copies from 'src/constants/copies';
import font from 'src/styles/font';

const {FDA} = copies;

const Logo = () => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <Text
      style={[
        styles.title,
        getThemedStyles({
          color: theme?.bgTextHigh,
        }),
      ]}>
      {FDA}
    </Text>
  );
};

export default Logo;

const styles = StyleSheet.create({
  title: {
    ...font.black,
    fontSize: 52,
  },
});
