import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import copies from 'src/constants/copies';
import containers from 'src/styles/containers';
import {getThemedStyles} from 'src/utils/theme';
import {useAppSelector} from 'src/hooks/reduxHooks';
import font from 'src/styles/font';

const {FDA, NUMBER_1_FOOD_DELIVERY_APP_IN_INDIA} = copies;

const SplashScreen = () => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <View
      style={[
        styles.container,
        getThemedStyles({backgroundColor: theme?.primaryDark}),
      ]}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.title,
            getThemedStyles({
              color: theme?.bgTextHigh,
            }),
          ]}>
          {FDA}
        </Text>
        <Text
          style={[styles.tagline, getThemedStyles({color: theme?.bgTextMid})]}>
          {NUMBER_1_FOOD_DELIVERY_APP_IN_INDIA}
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    ...containers.columnCenterCenter,
    flex: 1,
  },
  textContainer: {
    ...containers.columnCenterCenter,
    width: '40%',
  },
  title: {
    ...font.black,
    fontSize: 52,
  },
  tagline: {
    ...font.medium,
    fontSize: 14,
    textAlign: 'center',
  },
});
