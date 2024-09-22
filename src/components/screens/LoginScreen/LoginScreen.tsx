import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import Logo from 'src/components/atoms/Logo';
import containers from 'src/styles/containers';
import copies from 'src/constants/copies';
import font from 'src/styles/font';
import FDATextInput from 'src/components/molecules/FDATextInput';
import {button} from 'src/constants/styles';

const {height: SCREEN_HEIGHT} = Dimensions.get('screen');
const logoHeight = Math.floor(0.3 * SCREEN_HEIGHT);

const {
  NUMBER_1_FOOD_DELIVERY_APP_IN_INDIA_CAPITALIZED,
  ENTER_MOBILE_NUMBER,
  CONTINUE,
  LOGIN_OR,
  SIGN_UP,
  BY_CONTINUING_YOU_AGREE_TO_OUT,
  TERMS_AND_SERVICES,
  PRIVACY_POLICY,
} = copies;

const LoginScreen = () => {
  const [number, setNumber] = useState<string>('');
  const theme = useAppSelector(state => state.themeReducer.theme);

  const onPressSignUp = () => {
    // TODO: navigate to sign up page
    console.log('navigate to sign up page');
  };

  const onNumberChange = (value: string) => {
    const newValue = value.replace(/[^0-9]/g, '').slice(0, 10);
    setNumber(newValue);
  };

  const onPressContinue = () => {
    // TODO: navigate to OTP page
    console.log('navigaet to OTP screen');
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
      <View style={styles.contentContainer}>
        <Text style={[styles.title, getThemedStyles({color: theme?.textHigh})]}>
          {NUMBER_1_FOOD_DELIVERY_APP_IN_INDIA_CAPITALIZED}
        </Text>
        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text
              style={[styles.text, getThemedStyles({color: theme?.textMid})]}>
              {LOGIN_OR}{' '}
            </Text>
            <TouchableOpacity onPress={onPressSignUp}>
              <Text
                style={[
                  styles.signUpText,
                  getThemedStyles({color: theme?.primaryDefault}),
                ]}>
                {SIGN_UP}
              </Text>
            </TouchableOpacity>
          </View>
          <FDATextInput
            value={number}
            onChangeText={onNumberChange}
            placeholder={ENTER_MOBILE_NUMBER}
            keyboardType="numeric"
            leftLabel="+91"
            autoFocus
            maxLength={10}
            containerStyles={getThemedStyles({
              borderColor: theme?.borderSecondary,
            })}
          />
          <TouchableOpacity
            style={[
              styles.button,
              button.buttonStyles,
              getThemedStyles({backgroundColor: theme?.primaryDefault}),
            ]}
            onPress={onPressContinue}>
            <Text
              style={[
                button.buttonTextStyles,
                getThemedStyles({color: theme?.bgTextHigh}),
              ]}>
              {CONTINUE}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text
          style={[
            styles.footerText,
            getThemedStyles({color: theme?.textHigh}),
          ]}>
          {BY_CONTINUING_YOU_AGREE_TO_OUT}
        </Text>
        <Text
          style={[styles.footerText, getThemedStyles({color: theme?.textLow})]}>
          {TERMS_AND_SERVICES}, {PRIVACY_POLICY}
        </Text>
      </View>
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
  contentContainer: {
    flexGrow: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    ...font.semiBold,
    fontSize: 32,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 12,
  },
  textContainer: {
    ...containers.rowCenterCenter,
    marginBottom: 12,
  },
  text: {
    ...font.medium,
    fontSize: 13,
  },
  signUpText: {
    ...font.semiBold,
    fontSize: 13,
  },
  button: {
    marginTop: 16,
  },
  footerContainer: {
    ...containers.columnCenterCenter,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 32,
  },
  footerText: {
    ...font.regular,
    fontSize: 14,
  },
});
