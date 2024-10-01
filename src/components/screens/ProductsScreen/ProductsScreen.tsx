import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';

import {RouteProp, useRoute} from '@react-navigation/native';
import {ActivityIndicator, Divider} from 'react-native-paper';

import Header from 'src/components/molecules/Header';
import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import Restaurant from 'src/components/organisms/Restaurant';
import {ProductStackParamList} from 'src/types/navigator';
import Product from 'src/components/organisms/Product/Product';
import useGetProducts from 'src/hooks/useGetProducts';
import {IProduct} from 'src/types/ordering';
import containers from 'src/styles/containers';

const renderItem = ({item}: {item: IProduct}) => <Product product={item} />;

const keyExtractor = (item: IProduct) => item.id;

const renderSeparator = () => <Divider bold />;

const ProductsScreen: React.FC = () => {
  const theme = useAppSelector(state => state.themeReducer.theme);
  const {
    params: {restaurant},
  } = useRoute<RouteProp<ProductStackParamList, 'ProductsScreen'>>();
  const {loading, products, getProducts, getMoreProducts} = useGetProducts({
    restaurantId: restaurant.id,
  });

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const onEndReached = () => {
    getMoreProducts();
  };

  return (
    <View
      style={[
        styles.container,
        getThemedStyles({
          backgroundColor: theme?.backgroundColor,
        }),
      ]}>
      <Header
        showBack
        leadingIconColor={theme?.primaryDark}
        containerStyles={getThemedStyles({
          backgroundColor: theme?.surface,
        })}
      />
      <Restaurant
        restaurant={restaurant}
        onPress={() => {}}
        style={[
          styles.restaurant,
          getThemedStyles({
            backgroundColor: theme?.surface,
            borderColor: theme?.borderSecondary,
          }),
        ]}
        showImage={false}
        mode="contained"
      />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        ListFooterComponent={
          loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size={'large'} color={theme?.primaryDark} />
            </View>
          ) : null
        }
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  restaurant: {
    marginHorizontal: 0,
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  loaderContainer: {
    ...containers.rowCenterCenter,
    paddingVertical: 16,
  },
});
