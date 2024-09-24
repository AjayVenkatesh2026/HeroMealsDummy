import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';
import {Button, Divider, Text} from 'react-native-paper';

import useGetCartDataPerRestaurant from 'src/hooks/useGetCartDataPerRestaurant';
import Header from 'src/components/molecules/Header';
import {useAppSelector} from 'src/hooks/reduxHooks';
import font from 'src/styles/font';
import {getThemedStyles} from 'src/utils/theme';
import copies from 'src/constants/copies';
import Heading from 'src/components/atoms/Heading';
import {getMergedAddress} from 'src/utils/helpers';
import ProductItem from 'src/components/molecules/OrderDetails/ProductItem';
import BillBreakdown from '../../molecules/OrderDetails/BillBreakdown';
import type {OrderStackParamList} from 'src/types/navigator';
import type {ICartProduct} from 'src/types/ordering';

const {ORDER_SUMMARY, YOUR_ITEMS, PLACE_ORDER} = copies;

const renderItem = (item: ICartProduct) => (
  <ProductItem
    quantity={item.quantity}
    product={item.details}
    key={item.details.id}
  />
);

const OrderDetails: React.FC = () => {
  const {
    params: {restaurantId = ''},
  } = useRoute<RouteProp<OrderStackParamList, 'OrderDetails'>>();
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {cartData} = useGetCartDataPerRestaurant({restaurantId});
  const {restaurant, products, orderData} = cartData;

  if (!restaurant) {
    return null;
  }

  const onPressPlaceOrder = () => {
    //TODO: navigate to payments screen
  };

  return (
    <View
      style={[
        styles.container,
        getThemedStyles({backgroundColor: theme?.surface}),
      ]}>
      <Header
        showBack
        containerStyles={getThemedStyles({
          backgroundColor: theme?.surface,
        })}>
        <Text
          variant="titleLarge"
          style={[font.medium, getThemedStyles({color: theme?.textHigh})]}>
          {ORDER_SUMMARY}
        </Text>
      </Header>
      <ScrollView style={styles.bodyContainer}>
        <Heading
          title={restaurant.name}
          description={getMergedAddress({address: restaurant.address})}
          style={[
            styles.restaurantContainer,
            getThemedStyles({backgroundColor: theme?.surface}),
          ]}
        />
        <Divider />
        <View style={styles.itemContainer}>
          <Text variant="bodyMedium" style={styles.itemsHeader}>
            {YOUR_ITEMS}
          </Text>
          <Divider />
          {products?.map(renderItem)}
        </View>
        <BillBreakdown data={orderData} />
      </ScrollView>
      <View>
        <Divider />
        <Button
          mode="contained"
          style={styles.button}
          onPress={onPressPlaceOrder}
          buttonColor={theme?.primaryDark}>
          {PLACE_ORDER}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  restaurantContainer: {
    paddingVertical: 16,
  },
  itemContainer: {
    paddingVertical: 16,
  },
  itemsHeader: {
    ...font.semiBold,
    marginBottom: 8,
  },
  bodyContainer: {
    paddingHorizontal: 16,
  },
  button: {
    margin: 16,
  },
});

export default OrderDetails;
