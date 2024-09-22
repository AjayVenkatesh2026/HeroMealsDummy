import {StyleSheet, View, Dimensions, ToastAndroid} from 'react-native';
import React, {useState} from 'react';

import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import Logo from 'src/components/atoms/Logo';
import containers from 'src/styles/containers';
import LoginContent from './LoginContent';
import {ActivityIndicator} from 'react-native-paper';
import OTPContent from './OTPContent';

const {height: SCREEN_HEIGHT} = Dimensions.get('screen');
const logoHeight = Math.floor(0.3 * SCREEN_HEIGHT);

const LoginScreen = () => {
  const [number, setNumber] = useState<string>('');
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useAppSelector(state => state.themeReducer.theme);

  const onNumberChange = (value: string) => {
    const newValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    setNumber(newValue);
  };

  const onPressContinue = () => {
    if (number && number.length === 10) {
      setLoading(true);
      // TODO: call /login to generate otp
      console.log('navigaet to OTP screen');
      setTimeout(() => {
        setLoading(false);
        setShowOTP(true);
      }, 1000);
    } else {
      ToastAndroid.show('Please enter a valid mobile number!', 500);
    }
  };

  return (
    <View
      style={[
        styles.container,
        getThemedStyles({backgroundColor: theme?.backgroundColor}),
      ]}>
      <View
        style={[
          styles.logo,
          getThemedStyles({backgroundColor: theme?.primaryDark}),
        ]}>
        <Logo />
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} color={theme?.primaryDark} />
        </View>
      ) : showOTP ? (
        <OTPContent setShowOTP={setShowOTP} />
      ) : (
        <LoginContent
          number={number}
          onNumberChange={onNumberChange}
          onPressContinue={onPressContinue}
        />
      )}
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    ...containers.rowCenterCenter,
    width: '100%',
    height: logoHeight,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  loaderContainer: {
    ...containers.rowCenterCenter,
    flex: 1,
  },
});
