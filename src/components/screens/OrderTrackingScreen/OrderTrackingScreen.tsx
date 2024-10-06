import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import {Card, Divider, Icon, Text} from 'react-native-paper';
import {type RouteProp, useRoute} from '@react-navigation/native';

import Header from 'src/components/molecules/Header';
import type {OrderStackParamList} from 'src/types/navigator';
import {
  CHAT_PROCESSING,
  MAP_MARKER_OUTLINE,
  MENU_DOTS,
  PHONE,
  RECORD_CIRCLE_OUTLINE,
  STAR,
} from 'src/constants/icons';
import font from 'src/styles/font';
import {getFormattedPrice} from 'src/utils/helpers';
import containers from 'src/styles/containers';
import {useAppSelector} from 'src/hooks/reduxHooks';

import dummyMap from 'src/assets/dummy/maps/dummy-map-tracking.png';
import dummyProfile from 'src/assets/dummy/delivery-partner/delivery-partner.png';
import copies from 'src/constants/copies';

const {ORDER_NO} = copies;
const ICON_SIZE = 20;
const STAR_ICON_SIZE = 16;

const OrderTrackingScreen = () => {
  const {
    params: {orderId},
  } = useRoute<RouteProp<OrderStackParamList, 'OrderTrackingScreen'>>();
  const theme = useAppSelector(state => state.themeReducer.theme);
  // TODO: replace with real data
  const ORDER_TOTAL = 349;
  const ORDER_STATUS = 'Went to you';
  const DELIVERY_SOURCE = {
    line_1: 'East Wing, Lower Ground Floor, Estancia Mall',
    line_2: 'Pasig City, Metro Manila',
  };
  const DELIVERY_DESTINATION = {
    line_1: '102 , P. Tuazon St., Cubao',
    line_2: 'Quezon City, Metro Manila',
  };
  const DELIVERY_PARTNER = {
    name: 'Alex F.',
    rating: 4.9,
  };

  return (
    <View style={styles.container}>
      <Header
        showBack
        trailingIcon={MENU_DOTS}
        containerStyles={styles.headerContainer}>
        <Text
          variant="titleMedium"
          style={styles.headerTitle}>{`${ORDER_NO} ${orderId}`}</Text>
      </Header>
      <Image source={dummyMap} style={styles.mapImage} />
      <Card
        style={[
          styles.orderDetailsContainer,
          {backgroundColor: theme?.surface},
        ]}>
        <View style={containers.rowCenterBetween}>
          <Text
            variant="titleMedium"
            style={[font.semiBold, {color: theme?.textHigh}]}>
            {getFormattedPrice(ORDER_TOTAL)}
          </Text>
          <View
            style={[
              styles.orderStatusContainer,
              {backgroundColor: theme?.positiveBG},
            ]}>
            <Text
              variant="bodyMedium"
              style={[font.regular, {color: theme?.positivePrimary}]}>
              {ORDER_STATUS}
            </Text>
          </View>
        </View>
        <Divider style={styles.divier} />
        <View style={containers.rowStartStart}>
          <View style={styles.addressIconContainer}>
            <Icon
              source={RECORD_CIRCLE_OUTLINE}
              size={ICON_SIZE}
              color={theme?.textLow}
            />
          </View>
          <View style={styles.addressContainer}>
            <Text
              variant="bodyMedium"
              style={[styles.addressLine1, {color: theme?.textHigh}]}>
              {DELIVERY_SOURCE.line_1}
            </Text>
            <Text
              variant="bodySmall"
              style={[font.regular, {color: theme?.textLow}]}>
              {DELIVERY_SOURCE.line_2}
            </Text>
          </View>
        </View>
        <View style={containers.rowStartStart}>
          <View style={styles.addressIconContainer}>
            <Icon
              source={MAP_MARKER_OUTLINE}
              size={ICON_SIZE}
              color={theme?.primaryDefault}
            />
          </View>
          <View style={styles.addressContainer}>
            <Text
              variant="bodyMedium"
              style={[styles.addressLine1, {color: theme?.textHigh}]}>
              {DELIVERY_DESTINATION.line_1}
            </Text>
            <Text
              variant="bodySmall"
              style={[font.regular, {color: theme?.textLow}]}>
              {DELIVERY_DESTINATION.line_2}
            </Text>
          </View>
        </View>
        <View style={styles.deliveryPartnerDetailsContainer}>
          <Image source={dummyProfile} style={styles.partnerImage} />
          <View style={styles.partnerDetails}>
            <Text
              variant="bodyLarge"
              style={[font.regular, {color: theme?.textHigh}]}>
              {DELIVERY_PARTNER.name}
            </Text>
            <View style={containers.rowStartStart}>
              <Icon
                source={STAR}
                color={theme?.starColor}
                size={STAR_ICON_SIZE}
              />
              <Text
                variant="bodyMedium"
                style={[styles.rating, {color: theme?.textLow}]}>
                {DELIVERY_PARTNER.rating}
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.iconContainer,
              {backgroundColor: theme?.borderTertiary},
            ]}>
            <Icon
              source={PHONE}
              size={ICON_SIZE}
              color={theme?.primaryDefault}
            />
          </View>
          <View
            style={[
              styles.iconContainer,
              {backgroundColor: theme?.borderTertiary},
            ]}>
            <Icon
              source={CHAT_PROCESSING}
              size={ICON_SIZE}
              color={theme?.primaryDefault}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default OrderTrackingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  headerTitle: {
    flex: 1,
    ...font.semiBold,
  },
  mapImage: {
    width: '100%',
    flex: 1,
  },
  orderDetailsContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  orderStatusContainer: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  divier: {
    marginVertical: 16,
  },
  addressContainer: {
    marginBottom: 8,
  },
  addressIconContainer: {
    marginTop: 8,
    marginRight: 8,
  },
  addressLine1: {
    ...font.regular,
    marginBottom: 4,
  },
  deliveryPartnerDetailsContainer: {
    ...containers.rowStartStart,
    paddingTop: 20,
    paddingBottom: 32,
  },
  partnerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  partnerDetails: {
    flex: 1,
  },
  rating: {
    ...font.regular,
    marginTop: -4,
  },
  iconContainer: {
    padding: 8,
    borderRadius: 40,
    marginRight: 8,
  },
});
