import {StyleSheet, Text} from 'react-native';
import React, {type FC} from 'react';

import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import font from 'src/styles/font';
import type {IQuantityXProductProps} from 'src/types/atoms';

const QuantityXProduct: FC<IQuantityXProductProps> = ({quantity, name}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <Text
      style={[
        styles.productDetail,
        getThemedStyles({
          color: theme?.textHigh,
        }),
      ]}>
      {quantity} x {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  productDetail: {
    ...font.semiBold,
    marginBottom: 0,
    fontSize: 12,
  },
});

export default QuantityXProduct;
