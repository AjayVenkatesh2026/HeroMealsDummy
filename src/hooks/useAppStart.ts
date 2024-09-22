import {useEffect} from 'react';

import {StackActions, useNavigation} from '@react-navigation/native';
import screenNames from 'src/constants/screenNames';
import {TEST_LOGGED_IN} from 'config';
import {useAppDispatch} from './reduxHooks';
import {updateProfile} from 'src/redux/slices/profileSlice';
import {dummyProfile} from 'src/constants/dummyData';

const {loginStackScreenNames} = screenNames;

const useAppStart = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      if (TEST_LOGGED_IN) {
        dispatch(updateProfile(dummyProfile));
        navigation.dispatch(StackActions.replace('BottomTab'));
      } else {
        navigation.dispatch(
          StackActions.replace('AuthStack', {
            screen: loginStackScreenNames.LoginScreen,
          }),
        );
      }
    }, 3000);
  }, [dispatch, navigation]);
};

export default useAppStart;
