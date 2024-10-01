import {StyleSheet, View} from 'react-native';
import React, {type FC} from 'react';

import {Divider, Text} from 'react-native-paper';

import {getFormattedPrice} from 'src/utils/helpers';
import containers from 'src/styles/containers';
import font from 'src/styles/font';
import type {IProductItem} from 'src/types/molecules';

const ProductItem: FC<IProductItem> = ({quantity, product}) => {
  return (
    <>
      <View style={styles.container}>
        <Text variant="titleMedium" style={font.semiBold}>
          {product.name}
        </Text>
        <View style={styles.priceContainer}>
          <Text
            variant="bodyMedium"
            style={font.medium}>{`${quantity} X ${product.price} `}</Text>
          <Text variant="bodyMedium" style={font.medium}>
            {getFormattedPrice(quantity * product.price)}
          </Text>
        </View>
      </View>
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  priceContainer: {
    ...containers.rowCenterBetween,
    paddingTop: 8,
  },
});

export default ProductItem;
