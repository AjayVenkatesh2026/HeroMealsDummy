import {useEffect} from 'react';

import {StackActions, useNavigation} from '@react-navigation/native';
import screenNames from 'src/constants/screenNames';
import {TEST_LOGGED_IN} from 'config';

const {loginStackScreenNames} = screenNames;

const useAppStart = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      if (TEST_LOGGED_IN) {
        navigation.dispatch(StackActions.replace('BottomTab'));
      } else {
        navigation.dispatch(
          StackActions.replace('AuthStack', {
            screen: loginStackScreenNames.LoginScreen,
          }),
        );
      }
    }, 3000);
  }, [navigation]);
};

export default useAppStart;
