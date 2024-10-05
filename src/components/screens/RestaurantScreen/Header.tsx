import {StyleSheet, View} from 'react-native';
import React from 'react';

import {IconButton} from 'react-native-paper';

import containers from 'src/styles/containers';
import {ARROW_LEFT, HEART_OUTLINE, MENU_DOTS} from 'src/constants/icons';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from 'src/hooks/reduxHooks';

const Header = () => {
  const navigation = useNavigation();
  const theme = useAppSelector(state => state.themeReducer.theme);

  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={containers.rowCenterStart}>
      <IconButton
        icon={ARROW_LEFT}
        onPress={onPressBack}
        iconColor={theme?.bgTextHigh}
      />
      <View style={styles.occupy} />
      <IconButton icon={HEART_OUTLINE} iconColor={theme?.bgTextHigh} />
      <IconButton icon={MENU_DOTS} iconColor={theme?.bgTextHigh} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  occupy: {
    flex: 1,
  },
});
