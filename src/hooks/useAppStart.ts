import {useEffect} from 'react';

import {StackActions, useNavigation} from '@react-navigation/native';
import screenNames from 'src/constants/screenNames';

const {loginStackScreenNames} = screenNames;

const useAppStart = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        StackActions.replace('AuthStack', {
          screen: loginStackScreenNames.LoginScreen,
        }),
      );
    }, 3000);
  }, [navigation]);
};

export default useAppStart;
