import {StyleSheet, View} from 'react-native';
import React, {useRef} from 'react';

import {OtpInput} from 'react-native-otp-entry';
import {Button, Text} from 'react-native-paper';
import {StackActions, useNavigation} from '@react-navigation/native';

import {useAppDispatch, useAppSelector} from 'src/hooks/reduxHooks';
import copies from 'src/constants/copies';
import {updateProfile} from 'src/redux/slices/profileSlice';
import {dummyProfile} from 'src/constants/dummyData';
import font from 'src/styles/font';

const {LOGIN, ENTER_OTP} = copies;

const OTPContent: React.FC = () => {
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

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.title}>
        {ENTER_OTP}
      </Text>
      <OtpInput
        numberOfDigits={6}
        onTextChange={onTextChange}
        focusColor={theme?.primaryDefault}
        textInputProps={{style: {borderRadius: 0}}}
        theme={{
          pinCodeContainerStyle: styles.pinCodeContainerStyle,
        }}
      />
      <Button
        mode="contained"
        buttonColor={theme?.primaryDark}
        onPress={onPressLogin}
        style={styles.button}>
        {LOGIN}
      </Button>
    </View>
  );
};

export default OTPContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    ...font.semiBold,
    alignSelf: 'center',
    marginBottom: 16,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 16,
  },
  pinCodeContainerStyle: {
    width: 48,
    height: 48,
  },
});
