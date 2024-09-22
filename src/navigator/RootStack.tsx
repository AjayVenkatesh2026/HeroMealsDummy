import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from 'src/types/navigator';
import SplashScreen from 'src/components/screens/SplashScreen/SplashScreen';
import useAppStart from 'src/hooks/useAppStart';
import AuthStack from './AuthStack';
import screenNames from 'src/constants/screenNames';

const Stack = createNativeStackNavigator<RootStackParamList>();
const {rootStackScreenNames} = screenNames;

const RootStack = () => {
  useAppStart();

  return (
    <Stack.Navigator initialRouteName={rootStackScreenNames.SplashScreen}>
      <Stack.Screen
        name={rootStackScreenNames.SplashScreen}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={rootStackScreenNames.AuthStack}
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
