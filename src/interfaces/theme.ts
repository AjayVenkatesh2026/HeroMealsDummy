import {ColorValue} from 'react-native';

interface ITheme {
  name: ColorValue;
  primaryDefault: ColorValue;
  primaryDark: ColorValue;
  primaryLight: ColorValue;
  primaryLight2: ColorValue;
  backgroundColor: ColorValue;
  surface: ColorValue;
  highlight: ColorValue;
  primaryBGColor: ColorValue;
  textHigh: ColorValue;
  textMid: ColorValue;
  textLow: ColorValue;
  textDisabled: ColorValue;
  bgTextHigh: ColorValue;
  bgTextMid: ColorValue;
  bgTextLow: ColorValue;
  borderPrimary: ColorValue;
  borderSecondary: ColorValue;
  borderTertiary: ColorValue;
}

export {type ITheme};
