import {StyleSheet, View} from 'react-native';
import React, {type FC} from 'react';

import QuantityXProduct from '../atoms/QuantityXProduct';
import type {IProductsQuantitiesProps, TItem} from 'src/types/molecules';

const renderProduct = (item: TItem) => {
  return (
    <QuantityXProduct name={item.name} quantity={item.quantity} key={item.id} />
  );
};

const ProductsQuantities: FC<IProductsQuantitiesProps> = ({items}) => {
  return (
    <View style={styles.productDetailsContainer}>
      {items.map(renderProduct)}
    </View>
  );
};

export default ProductsQuantities;

const styles = StyleSheet.create({
  productDetailsContainer: {
    paddingVertical: 12,
  },
});
