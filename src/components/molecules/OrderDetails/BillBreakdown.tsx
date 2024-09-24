import {StyleSheet, View} from 'react-native';
import React, {type FC} from 'react';

import {Divider} from 'react-native-paper';

import KeyValue from 'src/components/atoms/KeyValue';
import {getFormattedPrice} from 'src/utils/helpers';
import font from 'src/styles/font';
import {getThemedStyles} from 'src/utils/theme';
import {useAppSelector} from 'src/hooks/reduxHooks';
import copies from 'src/constants/copies';
import type {IBillBreakdownProps} from 'src/types/molecules';

const {ITEM_TOTAL, PLATFORM_FEE, TAXES, DELIVERY_CHARGE, GRAND_TOTAL} = copies;

const BillBreakdown: FC<IBillBreakdownProps> = ({data}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {itemTotal, deliveryFee = 0, platformFee = 0, tax = 0} = data;
  const grandTotal = itemTotal + deliveryFee + platformFee + tax;
  const bigRowStyles = [
    styles.title,
    getThemedStyles({color: theme?.textHigh}),
  ];
  const smallRowStyles = [
    styles.titleSmall,
    getThemedStyles({color: theme?.textMid}),
  ];

  return (
    <View>
      <KeyValue
        name={ITEM_TOTAL}
        value={getFormattedPrice(itemTotal)}
        keyStyles={bigRowStyles}
        valueStyles={bigRowStyles}
      />
      {tax ? (
        <KeyValue
          name={TAXES}
          value={getFormattedPrice(tax)}
          keyStyles={smallRowStyles}
          valueStyles={smallRowStyles}
        />
      ) : null}
      {deliveryFee ? (
        <KeyValue
          name={DELIVERY_CHARGE}
          value={getFormattedPrice(deliveryFee)}
          keyStyles={smallRowStyles}
          valueStyles={smallRowStyles}
        />
      ) : null}
      {platformFee ? (
        <KeyValue
          name={PLATFORM_FEE}
          value={getFormattedPrice(platformFee)}
          keyStyles={smallRowStyles}
          valueStyles={smallRowStyles}
        />
      ) : null}
      <Divider />
      <KeyValue
        name={GRAND_TOTAL}
        value={getFormattedPrice(grandTotal)}
        keyStyles={[styles.titleBig, getThemedStyles({color: theme?.textHigh})]}
        valueStyles={[
          styles.titleBig,
          getThemedStyles({color: theme?.textHigh}),
        ]}
        style={styles.total}
      />
    </View>
  );
};

export default BillBreakdown;

const styles = StyleSheet.create({
  title: {
    ...font.medium,
    fontSize: 16,
  },
  titleSmall: {
    ...font.medium,
    fontSize: 14,
  },
  titleBig: {
    ...font.semiBold,
    fontSize: 16,
  },
  total: {
    paddingVertical: 12,
  },
});
