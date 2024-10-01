import {useMemo} from 'react';

import {group} from 'radash';

import {useAppSelector} from './reduxHooks';
import type {ICartData} from 'src/types/ordering';
import {getCartRestaurantData} from 'src/utils/cart';

const useGetCartData = () => {
  const cartProducts = useAppSelector(state => state.cartReducer.products);
  const restaurants = useAppSelector(
    state => state.restaurantsReducer.restaurants,
  );

  const cartData = useMemo<ICartData[]>(() => {
    const products = Object.values(cartProducts).filter(
      product => product.quantity > 0,
    );
    const groupedProductsByRestaurant = group(
      products,
      product => product.details.restaurant_id,
    );
    const uniqRestaurantIds = Object.keys(groupedProductsByRestaurant);
    const cartRestaurants = restaurants.filter(res =>
      uniqRestaurantIds.includes(res.id),
    );
    const data = cartRestaurants.map(restaurant => {
      return getCartRestaurantData({restaurant, groupedProductsByRestaurant});
    });

    return data;
  }, [cartProducts, restaurants]);

  return {
    cartData,
  };
};

export default useGetCartData;
