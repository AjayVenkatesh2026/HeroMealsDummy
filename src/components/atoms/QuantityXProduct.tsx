import {StyleSheet} from 'react-native';
import React, {type FC} from 'react';

import {Text} from 'react-native-paper';

import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import font from 'src/styles/font';
import type {IQuantityXProductProps} from 'src/types/atoms';

const QuantityXProduct: FC<IQuantityXProductProps> = ({quantity, name}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <Text
      variant="bodySmall"
      style={[styles.productDetail, getThemedStyles({color: theme?.textHigh})]}>
      {quantity} x {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  productDetail: {
    ...font.semiBold,
    paddingVertical: 2,
  },
});

export default QuantityXProduct;
