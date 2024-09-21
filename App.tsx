import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import RootStack from './src/navigator/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.mainContainer}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
