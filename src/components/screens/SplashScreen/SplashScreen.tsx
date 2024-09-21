import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import containers from '../../../styles/containers';
import light from '../../../themes/light';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FDA</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    ...containers.rowCenterCenter,
    flex: 1,
    backgroundColor: light.primaryDark,
  },
});
