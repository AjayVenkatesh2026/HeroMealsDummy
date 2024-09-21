/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import RootStack from './src/navigator/RootStack';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
