import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import type {RootStackParamList} from 'src/types/navigator';
import SplashScreen from 'src/components/screens/SplashScreen/SplashScreen';
import useAppStart from 'src/hooks/useAppStart';
import AuthStack from './AuthStack';
import screenNames from 'src/constants/screenNames';
import BottomTab from '../components/organisms/BottomTab';
import ProductsStack from './ProductsStack';

const Stack = createNativeStackNavigator<RootStackParamList>();
const {rootStackScreenNames} = screenNames;

const RootStack = () => {
  useAppStart();

  return (
    <Stack.Navigator
      initialRouteName={rootStackScreenNames.SplashScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={rootStackScreenNames.SplashScreen}
        component={SplashScreen}
      />
      <Stack.Screen
        name={rootStackScreenNames.AuthStack}
        component={AuthStack}
      />
      <Stack.Screen
        name={rootStackScreenNames.BottomTab}
        component={BottomTab}
      />
      <Stack.Screen
        name={rootStackScreenNames.ProductStack}
        component={ProductsStack}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
