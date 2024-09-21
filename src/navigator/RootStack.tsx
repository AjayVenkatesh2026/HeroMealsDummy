import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from 'src/components/screens/SplashScreen/SplashScreen';
import screenNames from 'src/constants/screenNames';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={screenNames.SplashScreen}>
      <Stack.Screen
        name={screenNames.SplashScreen}
        component={SplashScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
