import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import {Text} from 'react-native-paper';

import Header from 'src/components/molecules/Header';
import copies from 'src/constants/copies';
import {useAppSelector} from 'src/hooks/reduxHooks';
import useGetCartData from 'src/hooks/useGetCartData';
import RestaurantInCart from 'src/components/organisms/RestaurantInCart/RestaurantInCart';
import Separator from 'src/components/atoms/Separator';
import EmptyCart from 'src/components/atoms/EmptyCart';
import type {ICartData} from 'src/types/ordering';

const {MY_CARTS} = copies;

const renderItem = (item: ICartData) => (
  <React.Fragment key={item.restaurant.id}>
    <RestaurantInCart restaurantData={item} key={item.restaurant.id} />
    <Separator />
  </React.Fragment>
);

// TODO: Add maybe clear all carts and clear restaurant cart options
const CartHomeScreen = () => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {cartData} = useGetCartData();

  return (
    <View style={styles.container}>
      <Header showBack leadingIconColor={theme?.primaryDark}>
        <Text variant="titleMedium">{MY_CARTS}</Text>
      </Header>
      <Separator />
      {cartData.length > 0 ? (
        <ScrollView>{cartData.map(renderItem)}</ScrollView>
      ) : (
        <EmptyCart />
      )}
    </View>
  );
};

export default CartHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
