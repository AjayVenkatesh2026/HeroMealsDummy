import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {Button} from 'react-native-paper';
import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';

const OTPContent = ({setShowOTP}: {setShowOTP: Function}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const textRef = useRef<string>('');

  const onTextChange = (text: string) => {
    textRef.current = text;
  };

  const onPressLogin = () => {
    // TODO: call login api with text
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
        Login
      </Button>
      <Button
        mode="outlined"
        textColor={theme?.primaryDark}
        onPress={onPressResendOTP}
        style={[
          styles.button,
          getThemedStyles({borderColor: theme?.primaryDark}),
        ]}>
        Resend OTP
      </Button>
      <Button mode="text" textColor={theme?.primaryDark} onPress={onPressBack}>
        Back
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
