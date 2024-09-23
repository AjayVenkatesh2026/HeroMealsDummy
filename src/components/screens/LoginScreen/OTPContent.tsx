import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {Button} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import copies from 'src/constants/copies';
import {updateProfile} from 'src/redux/slices/profileSlice';
import {dummyProfile} from 'src/constants/dummyData';
import {StackActions, useNavigation} from '@react-navigation/native';

const {LOGIN, RESEND_OTP, BACK} = copies;

const OTPContent = ({setShowOTP}: {setShowOTP: Function}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const dispatch = useAppDispatch();
  const textRef = useRef<string>('');
  const navigation = useNavigation();

  const onTextChange = (text: string) => {
    textRef.current = text;
  };

  const onPressLogin = () => {
    // TODO: call login api with text
    dispatch(updateProfile(dummyProfile));
    navigation.dispatch(StackActions.replace('BottomTab'));
    console.log(textRef.current);
  };

  const onPressResendOTP = () => {
    // TODO: call resend otp
  };

  const onPressBack = () => {
    setShowOTP(false);
  };

  return (
    <View style={styles.container}>
      <OtpInput numberOfDigits={6} onTextChange={onTextChange} />
      <Button
        mode="contained"
        buttonColor={theme?.primaryDark}
        onPress={onPressLogin}
        style={styles.button}>
        {LOGIN}
      </Button>
      <Button
        mode="outlined"
        textColor={theme?.primaryDark}
        onPress={onPressResendOTP}
        style={[
          styles.button,
          getThemedStyles({borderColor: theme?.primaryDark}),
        ]}>
        {RESEND_OTP}
      </Button>
      <Button mode="text" textColor={theme?.primaryDark} onPress={onPressBack}>
        {BACK}
      </Button>
    </View>
  );
};

export default OTPContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 100,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 16,
  },
});
