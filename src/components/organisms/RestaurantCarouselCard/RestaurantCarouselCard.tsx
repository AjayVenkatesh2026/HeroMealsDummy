import {ImageBackground, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

import {Icon, Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

import type {IRestaurant} from 'src/types/ordering';
import font from 'src/styles/font';
import {getThemedStyles} from 'src/utils/theme';
import {useAppSelector} from 'src/hooks/reduxHooks';
import copies from 'src/constants/copies';

const {DOT} = copies;

interface IRestaurantCarouselCardProps {
  restaurant: IRestaurant;
}

const RestaurantCarouselCard: React.FC<IRestaurantCarouselCardProps> = ({
  restaurant,
}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {image, name, distance, tags, rating} = restaurant;
  const tagsText = tags.join(` ${DOT} `);

  const onPress = () => {};

  return (
    <Pressable onPress={onPress}>
      <ImageBackground source={{uri: image}} style={styles.bgImage}>
        <LinearGradient
          start={{x: 0.5, y: 0}}
          end={{x: 0.5, y: 1}}
          style={styles.container}
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.3)',
          ]}
          locations={[0, 0.5, 0.5, 1]}>
          <View>
            <View
              style={[
                styles.ratingContainer,
                getThemedStyles({backgroundColor: theme?.primaryDefault}),
              ]}>
              <Icon source={'star'} size={16} color={theme?.bgTextHigh} />
              <Text
                variant="titleSmall"
                style={[
                  styles.rating,
                  getThemedStyles({color: theme?.bgTextHigh}),
                ]}>
                {rating}
              </Text>
            </View>
            <View style={styles.contentContainer}>
              <Text
                variant="titleLarge"
                style={[
                  font.bold,
                  getThemedStyles({color: theme?.bgTextHigh}),
                ]}>
                {name}
              </Text>
              {tagsText ? (
                <Text
                  variant="bodyMedium"
                  style={[
                    font.regular,
                    getThemedStyles({color: theme?.bgTextHigh}),
                  ]}>
                  {tagsText}
                </Text>
              ) : null}
              <Text
                variant="bodyMedium"
                style={[font.bold, getThemedStyles({color: theme?.bgTextMid})]}>
                {distance}
              </Text>
              {/* TODO: ADD favourtes icon */}
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

export default RestaurantCarouselCard;

const styles = StyleSheet.create({
  bgImage: {
    width: 256,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 16,
  },
  ratingContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 2,
  },
  rating: {
    ...font.bold,
    textAlignVertical: 'center',
    includeFontPadding: false,
    marginTop: -2,
    marginLeft: 2,
  },
});
