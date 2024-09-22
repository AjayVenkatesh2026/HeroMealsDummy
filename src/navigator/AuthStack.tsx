import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from 'src/components/screens/LoginScreen/LoginScreen';
import screenNames from 'src/constants/screenNames';
import type {AuthStackParamList} from 'src/types/navigator';

const {loginStackScreenNames} = screenNames;

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={loginStackScreenNames.LoginScreen}
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
