import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Button, Card, Text} from 'react-native-paper';

import type {IRestaurant} from 'src/types/ordering';
import font from 'src/styles/font';
import {getThemedStyles} from 'src/utils/theme';
import {useAppSelector} from 'src/hooks/reduxHooks';
import containers from 'src/styles/containers';
import {STAR} from 'src/constants/icons';
import copies from 'src/constants/copies';

import FDAImage from '../atoms/FDAImage';

const {MINS} = copies;

const Restaurant = ({restaurant}: {restaurant: IRestaurant}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {name, image, distance, duration, rating} = restaurant;
  const description = `${distance} \u2022 ${duration} ${MINS}`;

  const onPressRestaurantCard = () => {
    // TODO: navigato to products screen
  };

  return (
    <Card style={styles.mainContainer} onPress={onPressRestaurantCard}>
      <FDAImage url={image} style={styles.image} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <View style={containers.rowCenterBetween}>
          <Text
            variant={'titleLarge'}
            style={[
              {...font.semiBold},
              getThemedStyles({color: theme?.textHigh}),
            ]}>
            {name}
          </Text>
          <Button
            contentStyle={styles.buttonContent}
            labelStyle={getThemedStyles({color: theme?.bgTextHigh})}
            icon={STAR}>
            {rating}
          </Button>
        </View>
        <Text
          variant={'bodyMedium'}
          style={[{...font.regular}, getThemedStyles({color: theme?.textMid})]}>
          {description}
        </Text>
      </View>
    </Card>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  contentContainer: {
    padding: 12,
  },
  buttonContent: {
    flexDirection: 'row-reverse',
    // TODO: remove hard coded color
    backgroundColor: 'green',
  },
});
