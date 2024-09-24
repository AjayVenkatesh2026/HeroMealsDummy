import {StyleSheet, View} from 'react-native';
import React, {type FC} from 'react';

import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Icon, Text, TouchableRipple} from 'react-native-paper';

import {CART_OUTLINE} from 'src/constants/icons';
import {useAppSelector} from 'src/hooks/reduxHooks';
import containers from 'src/styles/containers';
import font from 'src/styles/font';
import {getThemedStyles} from 'src/utils/theme';
import {getProductTotalAllRestaurants} from 'src/utils/cart';
import copies from 'src/constants/copies';
import {getFormattedPrice} from 'src/utils/helpers';
import type {RootStackParamList} from 'src/types/navigator';

const {CART} = copies;

const CartButton: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const theme = useAppSelector(state => state.themeReducer.theme);
  const cart = useAppSelector(state => state.cartReducer.products);
  const productTotal = getProductTotalAllRestaurants(cart);
  const hasCartProducts = productTotal > 0;
  const copy = hasCartProducts ? getFormattedPrice(productTotal) : CART;

  const onPress = () => {
    navigation.navigate('OrderStack', {
      screen: 'CartHomeScreen',
    });
  };

  return (
    <TouchableRipple style={containers.columnCenterCenter} onPress={onPress}>
      <View
        style={
          hasCartProducts ? styles.activeContainer : styles.inActiveContainer
        }>
        <Icon source={CART_OUTLINE} color={theme?.bgTextHigh} size={18} />
        <Text
          variant="bodyMedium"
          style={[
            hasCartProducts
              ? styles.activatedCartText
              : styles.inActiveCartText,
            getThemedStyles({
              color: theme?.bgTextHigh,
              backgroundColor: hasCartProducts
                ? theme?.accentPrimary
                : undefined,
            }),
          ]}>
          {copy}
        </Text>
      </View>
    </TouchableRipple>
  );
};

export default CartButton;

const styles = StyleSheet.create({
  activeContainer: {
    ...containers.columnCenterCenter,
    marginRight: 4,
  },
  inActiveContainer: {
    ...containers.columnCenterCenter,
    marginHorizontal: 16,
  },
  activatedCartText: {
    ...font.medium,
    paddingHorizontal: 8,
    borderRadius: 20,
    fontSize: 10,
    marginTop: 4,
  },
  inActiveCartText: {
    ...font.medium,
    fontSize: 12,
  },
});
