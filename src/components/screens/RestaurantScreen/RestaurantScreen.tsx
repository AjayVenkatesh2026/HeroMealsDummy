import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';

import {ProductStackParamList} from 'src/types/navigator';
import RestaurantMenuItem from 'src/components/organisms/RestaurantMenuItem/RestaurantMenuItem';
import {dummyProducts} from 'src/constants/dummyData';
import {useAppSelector} from 'src/hooks/reduxHooks';
import ListHeader from './ListHeader';
import {IProduct} from 'src/types/ordering';
import ListFooter from './ListFooter';

const keyExtractor = (item: IProduct) => item.id;

const RestaurantScreen = () => {
  const {
    params: {restaurant},
  } = useRoute<RouteProp<ProductStackParamList, 'RestaurantScreen'>>();
  const theme = useAppSelector(state => state.themeReducer.theme);

  const renderItem = ({item}: {item: IProduct}) => (
    <RestaurantMenuItem restaurant={restaurant} product={item} />
  );

  return (
    <FlatList
      data={dummyProducts}
      renderItem={renderItem}
      ListHeaderComponent={<ListHeader restaurant={restaurant} />}
      keyExtractor={keyExtractor}
      style={[styles.container, {backgroundColor: theme?.surface}]}
      ListFooterComponent={<ListFooter restaurant={restaurant} />}
    />
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
