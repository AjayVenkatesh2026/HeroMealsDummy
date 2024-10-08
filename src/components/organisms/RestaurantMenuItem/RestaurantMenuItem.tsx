import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Button, Text} from 'react-native-paper';

import {IProduct, IRestaurant} from 'src/types/ordering';
import FDAImage from 'src/components/atoms/FDAImage';
import containers from 'src/styles/containers';
import QuantitySelector from '../Product/QuantitySelector';
import {getFormattedPrice} from 'src/utils/helpers';
import copies from 'src/constants/copies';
import font from 'src/styles/font';
import {useAppSelector} from 'src/hooks/reduxHooks';

const {TODAY, SOLD_OUT, NOTIFY_ME} = copies;

interface IRestaurantMenuItemProps {
  product: IProduct;
  restaurant: IRestaurant;
  showTimings?: boolean;
  showCategory?: boolean;
}

const RestaurantMenuItem: React.FC<IRestaurantMenuItemProps> = ({
  product,
  restaurant,
  showTimings = true,
  showCategory = false,
}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {image_url, name, price, category} = product;
  const {openingHours} = restaurant;
  const timings = `${TODAY}, ${openingHours}`;
  const is_available = true;

  return (
    <View style={styles.container}>
      <FDAImage url={image_url} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text variant="titleMedium" style={styles.title}>
          {name}
        </Text>
        {showCategory && category ? (
          <Text
            variant="bodySmall"
            style={[styles.category, {color: theme?.textMid}]}>
            {category}
          </Text>
        ) : null}
        <Text variant="bodyMedium" style={styles.price}>
          {getFormattedPrice(price)}
        </Text>
        {showTimings ? (
          <Text variant="bodySmall" style={styles.timings}>
            {timings}
          </Text>
        ) : null}
        {!is_available ? (
          <Text
            variant="bodySmall"
            style={[styles.soldOut, {color: theme?.primaryDefault}]}>
            {SOLD_OUT}
          </Text>
        ) : null}
      </View>
      <View style={styles.rightContainer}>
        {is_available ? (
          <QuantitySelector product={product} restaurant={restaurant} />
        ) : (
          <Button
            mode="outlined"
            style={[
              styles.buttonStyle,
              {
                borderColor: theme?.primaryDefault,
              },
            ]}
            labelStyle={styles.labelStyle}
            textColor={theme?.primaryDefault}>
            {NOTIFY_ME}
          </Button>
        )}
      </View>
    </View>
  );
};

export default RestaurantMenuItem;

const styles = StyleSheet.create({
  container: {
    ...containers.rowStretchCenter,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  image: {
    width: 82,
    height: 82,
    borderRadius: 8,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 8,
  },
  title: {
    ...font.bold,
    textAlign: 'left',
    fontSize: 18,
  },
  price: {
    ...font.bold,
    fontSize: 14,
  },
  timings: {
    ...font.regular,
    fontSize: 12,
  },
  soldOut: {
    ...font.bold,
    fontSize: 12,
  },
  buttonStyle: {
    borderRadius: 8,
  },
  labelStyle: {
    marginHorizontal: 16,
    marginVertical: 4,
  },
  rightContainer: {
    paddingTop: 8,
  },
  category: {
    ...font.regular,
    fontSize: 12,
  },
});
