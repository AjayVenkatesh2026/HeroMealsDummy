import {StyleSheet, View} from 'react-native';
import React from 'react';
import type {IOrder, IOrderProduct} from 'src/types/ordering';
import {Card, Divider, Text} from 'react-native-paper';
import {useAppSelector} from 'src/hooks/reduxHooks';
import containers from 'src/styles/containers';
import FDAImage from '../atoms/FDAImage';
import font from 'src/styles/font';
import {getThemedStyles} from 'src/utils/theme';
import {format} from 'date-fns';
import {ddLLLhhmmbb} from 'src/constants/date';
import copies from 'src/constants/copies';
import {getFormattedPrice} from 'src/utils/helpers';

const {ORDER_PLACED_ON} = copies;

const OrderCard = ({order}: {order: IOrder}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {delivered_at, order_status, order_total, products, restaurant} = order;
  const {image, address, name} = restaurant;
  const {line_2} = address;
  const onPressCard = () => {};

  const renderProduct = (item: IOrderProduct) => {
    return (
      <Text
        key={item.id}
        variant="bodySmall"
        style={[
          styles.productDetail,
          getThemedStyles({color: theme?.textHigh}),
        ]}>
        {item.quantity} x {item.name}
      </Text>
    );
  };

  return (
    <Card
      onPress={onPressCard}
      style={getThemedStyles({backgroundColor: theme?.surface})}>
      <View
        style={[
          styles.headerContainer,
          getThemedStyles({backgroundColor: theme?.borderTertiary}),
        ]}>
        <FDAImage url={image} style={styles.image} resizeMode="cover" />
        <View style={styles.restaurantDetails}>
          <Text
            variant="titleMedium"
            style={[font.semiBold, getThemedStyles({color: theme?.textHigh})]}>
            {name}
          </Text>
          <Text
            variant="bodySmall"
            style={[font.regular, getThemedStyles({color: theme?.textMid})]}>
            {line_2}
          </Text>
        </View>
        <Divider
          style={getThemedStyles({backgroundColor: theme?.borderSecondary})}
        />
      </View>
      <View style={styles.middleContainer}>
        <View style={styles.productDetailsContainer}>
          {products.map(renderProduct)}
        </View>
        <Divider
          style={getThemedStyles({backgroundColor: theme?.borderSecondary})}
        />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.orderDetailsContainer}>
          <Text
            variant={'bodySmall'}
            style={font.regular}>{`${ORDER_PLACED_ON} ${format(
            delivered_at,
            ddLLLhhmmbb,
          )}`}</Text>
          <Text variant={'bodySmall'} style={styles.orderStatus}>
            {order_status}
          </Text>
        </View>
        <Text variant={'titleSmall'} style={font.semiBold}>
          {getFormattedPrice(order_total)}
        </Text>
      </View>
    </Card>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  headerContainer: {
    ...containers.rowCenterStart,
    padding: 12,
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 12,
  },
  restaurantDetails: {
    paddingLeft: 12,
  },
  middleContainer: {
    paddingHorizontal: 12,
  },
  productDetailsContainer: {
    paddingVertical: 12,
  },
  productDetail: {
    ...font.semiBold,
    paddingVertical: 2,
  },
  footerContainer: {
    ...containers.rowCenterStart,
    padding: 12,
  },
  orderDetailsContainer: {
    flex: 1,
  },
  orderStatus: {
    ...font.regular,
    marginTop: 4,
  },
});
