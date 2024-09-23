import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';

import {Button, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import containers from 'src/styles/containers';
import {useAppSelector} from 'src/hooks/reduxHooks';
import font from 'src/styles/font';
import copies from 'src/constants/copies';
import screenNames from 'src/constants/screenNames';
import type {RootStackParamList} from 'src/types/navigator';

const {YOUR_CART_IS_EMPTY, ORDER} = copies;
const {bottomTabScreenNames} = screenNames;

const EmptyCart: FC = () => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onClickOrder = () => {
    navigation.navigate('BottomTab', {
      screen: bottomTabScreenNames.HomeScreen,
    });
  };

  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={[styles.text, font.medium]}>
        {YOUR_CART_IS_EMPTY}
      </Text>
      <Button
        mode="contained"
        buttonColor={theme?.primaryDark}
        onPress={onClickOrder}>
        {ORDER}
      </Button>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...containers.columnCenterCenter,
  },
  text: {
    marginBottom: 16,
  },
});
