import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Text} from 'react-native-paper';

import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import font from 'src/styles/font';
import FDAImage from '../atoms/FDAImage';
import containers from 'src/styles/containers';
import type {IRestaurantDetailsCardProps} from 'src/types/molecules';

const RestaurantDetailsCard: React.FC<IRestaurantDetailsCardProps> = ({
  image,
  name,
  description,
}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
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
          style={[font.regular, getThemedStyles({color: theme?.textMid})]}
          numberOfLines={1}
          ellipsizeMode="tail">
          {description}
        </Text>
      </View>
    </View>
  );
};

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
});

export default RestaurantDetailsCard;
