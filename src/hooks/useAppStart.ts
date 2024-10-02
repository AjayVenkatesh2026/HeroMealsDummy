import {useEffect} from 'react';

import {StackActions, useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getBoolean} from 'src/storage';

import screenNames from 'src/constants/screenNames';
import {TEST_LOGGED_IN} from 'config';
import {useAppDispatch} from './reduxHooks';
import {updateProfile} from 'src/redux/slices/profileSlice';
import {dummyProfile} from 'src/constants/dummyData';
import keys from 'src/storage/keys';
import type {RootStackParamList} from 'src/types/navigator';

const {loginStackScreenNames} = screenNames;

const useAppStart = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const hasSeenOnboarding = getBoolean(keys.HAS_SEEN_ONBOARDING);
    setTimeout(() => {
      if (!hasSeenOnboarding) {
        navigation.navigate('OnboardingScreen');
      } else {
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
      }
    }, 1500);
  }, [dispatch, navigation]);
};

export default useAppStart;
