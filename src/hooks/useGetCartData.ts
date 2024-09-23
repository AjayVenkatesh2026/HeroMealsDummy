import {useMemo} from 'react';

import {group} from 'radash';

import {useAppSelector} from './reduxHooks';
import type {ICartData} from 'src/types/ordering';

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
      const restaurantProducts =
        groupedProductsByRestaurant[restaurant.id] || [];
      const productsTotal = restaurantProducts.reduce(
        (acc, product) => acc + product.details.price * product.quantity,
        0,
      );

      return {
        restaurant,
        products: restaurantProducts,
        orderData: {
          total: productsTotal,
        },
      };
    });

    return data;
  }, [cartProducts, restaurants]);

  return {
    cartData,
  };
};

export default useGetCartData;
