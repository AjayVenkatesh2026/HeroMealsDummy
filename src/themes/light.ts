import colors from '../constants/colors';
import {LIGHT_THEME} from '../constants/themes';

const {bluePalette, redPalette, whitePalette, grayPalette} = colors;

const primaryPalette = {
  primaryDefault: redPalette.lavaRed,
  primaryDark: redPalette.flushMahogany,
  primaryLight: redPalette.duskyRose,
  primaryLight2: redPalette.dirtyPink,
};

const backgroundPalette = {
  backgroundColor: whitePalette.antiFlash,
  surface: whitePalette.white,
  highlight: whitePalette.ghostWhite,
  primaryBGColor: whitePalette.lavendarBlush,
};

const textPalette = {
  textHigh: bluePalette.yankeesBlue,
  textMid: bluePalette.independence,
  textLow: bluePalette.rhythm,
  textDisabled: grayPalette.lavendarGray,
};

const bgTextPalette = {
  bgTextHigh: whitePalette.white,
  bgTextMid: whitePalette.white75,
  bgTextLow: whitePalette.white50,
};

const borderPallette = {
  borderPrimary: grayPalette.lavendarGray,
  borderSecondary: grayPalette.gainsboro,
  borderTertiary: whitePalette.antiFlash,
};

const light = {
  name: LIGHT_THEME,
  ...primaryPalette,
  ...backgroundPalette,
  ...textPalette,
  ...bgTextPalette,
  ...borderPallette,
};

export default light;
